'use client';
import { FiChevronsDown } from 'react-icons/fi';
import { Keypair, Networks, TransactionBuilder } from '@stellar/stellar-sdk';
import { Http } from '../fetchApi/http';
import { useState } from 'react';
import Freighter from '@stellar/freighter-api';
const Dashboard = () => {
  const generateKeyPair = async () => {
    try {
      const isAllowed = await Freighter.isAllowed();
      if (!isAllowed) {
        console.log('Freighter not allowed');
        await Freighter.setAllowed();
      }

      const isFrieghterAvailable = await Freighter.isConnected();
      if (!isFrieghterAvailable) {
        console.log('Freighter not available');
        return;
      }
      const user = await Freighter.getUserInfo();
      console.log(user, 'user');
      const clientPublickey = await Freighter.getPublicKey();
      const challengeResponse = await Http.get({
        endpoint: `/auth/nonce?account=${clientPublickey}`,
      });

      // @ts-expect-error
      if (!challengeResponse?.data?.transaction) {
        console.log('No challenge response');
        return;
      }

      const signedTransaction = await Freighter.signTransaction(
        //@ts-expect-error
        challengeResponse.data.transaction,
        {
          network: 'TESTNET',
          networkPassphrase: challengeResponse.data.network_passphrase,
        }
      );

      const authResponse = await Http.post({
        endpoint: `/auth/verify`,
        body: JSON.stringify({
          transaction: signedTransaction,
        }),
      });
      console.log(authResponse);
    } catch (error) {}
  };

  return (
    <div className="fixed bottom-16 right-5">
      <button
        onClick={generateKeyPair}
        className="flex justify-around items-center px-4 py-2 text-white rounded-full bg-gray-900 w-[130px] h-[50px] hover:bg-gray-700"
      >
        <FiChevronsDown size={20} />
        Connect Wallet
      </button>
    </div>
  );
};

export default Dashboard;
