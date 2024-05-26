import { wagmiConfig } from '@api/utils/wagmi';
import { getTransactionConfirmations } from '@wagmi/core';

export const transaction = async (hash: `0x${string}`) =>
  await getTransactionConfirmations(wagmiConfig, {
    hash: hash,
  });
