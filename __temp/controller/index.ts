import { config } from '@app/config';
import { Keypair, Networks, Transaction } from '@stellar/stellar-sdk';
import { Request, Response } from 'express';
import { createClientSignRequest, verifyRequest } from '../services/auth';
// import { verifyRequest } from '@services/auth';

export const verify = async (request: Request, response: Response) => {
  const isValid = await verfiyTransactionRequest(request, response);
  const txXDR = request.body.transaction;
  if (isValid) {
    const user = await verifyRequest(txXDR);
    response.send({ ok: true, user });
  }
};

export const clientAuthTransaction = async (
  request: Request,
  response: Response
) => {
  const clientAccountId = request.query.account as string;
  const { transaction, network_passphrase } = await createClientSignRequest(
    clientAccountId
  );
  response.send({ transaction, network_passphrase });
};

export const verfiyTransactionRequest = async (req: Request, res: Response) => {
  const serverSecret = config.stellar.stellarSecret;
  const serverKeypair = Keypair.fromSecret(serverSecret);
  const { transaction: txXDR } = req.body;

  const transaction = new Transaction(txXDR, Networks.TESTNET);
  const clientKeypair = Keypair.fromPublicKey(transaction.source);
  const isValidSignature = transaction.signatures.some((signature) =>
    clientKeypair.verify(transaction.hash(), signature.signature())
  );

  if (!isValidSignature) {
    return res.status(400).send('Invalid signature.');
  }

  const isServerSigned = transaction.signatures.some((signature) =>
    serverKeypair.verify(transaction.hash(), signature.signature())
  );

  if (!isServerSigned) {
    return res.status(400).send('Server signature missing.');
  }

  return isServerSigned;
};
