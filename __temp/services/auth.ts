import {
  Keypair,
  Networks,
  TransactionBuilder,
  Transaction,
  Operation,
  BASE_FEE,
  Horizon,
} from '@stellar/stellar-sdk';

export const createClientSignRequest = async (clientAccountId: string) => {
  const { serverAccountId, serverKeypair } = serverAccountSid();
  const server = new Horizon.Server('https://horizon-testnet.stellar.org');

  try {
    const account = await server.loadAccount(serverAccountId);

    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.manageData({
          name: `auth-${serverAccountId}`,
          value: clientAccountId as string,
        })
      )
      .setTimeout(300)
      .build();

    transaction.sign(serverKeypair);

    return {
      transaction: transaction.toEnvelope().toXDR('base64').toString(),
      network_passphrase: Networks.TESTNET,
    };
  } catch (error) {
    throw new Error(`Error creating challenge transaction: ${error}`);
  }
};

export const verifyRequest = async (txXDR: string) => {
  const { serverKeypair, serverAccountId } = serverAccountSid();

  try {
    const transaction = new Transaction(txXDR, Networks.TESTNET);

    const clientKeypair = Keypair.fromPublicKey(transaction.source);

    const isValidSignature = transaction.signatures.some((signature) =>
      clientKeypair.verify(transaction.hash(), signature.signature())
    );

    if (!isValidSignature) {
      throw new Error('Invalid signature');
    }

    const isServerSigned = transaction.signatures.some((signature) =>
      serverKeypair.verify(transaction.hash(), signature.signature())
    );

    if (!isServerSigned) {
      throw new Error('Server signature missing');
    }

    const manageDataOp = transaction.operations.find(
      (op) => op.type === 'manageData' && op.name === `auth-${serverAccountId}`
    );

    const manageDataValue =
      manageDataOp?.type === 'manageData' && manageDataOp?.value
        ? manageDataOp.value.toString('utf-8')
        : null;

    if (manageDataValue) {
      // const user = await findOneOrCreateUser(manageDataValue);
      return {
        success: true,
        message: 'User created successfully',
        // ...user,
      };
    }
  } catch (error) {
    console.error('Error processing transaction:', error);
  }
};

const serverAccountSid = () => {
  const serverSecret = config.stellar.stellarSecret;
  const serverKeypair = Keypair.fromSecret(serverSecret);
  const serverAccountId = serverKeypair.publicKey();
  return {
    serverAccountId: serverAccountId,
    serverKeypair: serverKeypair,
    serverSecret: serverSecret,
  };
};
