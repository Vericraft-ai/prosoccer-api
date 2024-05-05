import { logger } from '@api/utils/logger';
import { User } from '@app/api/db/models';

export const findUsersByWalletAddress = async (walletAddress: string) => {
  try {
    return await User.findOne({
      wallet_address: walletAddress,
    });
  } catch (error) {
    logger.error(error);
  }
};
