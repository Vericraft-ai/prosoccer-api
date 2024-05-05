import { logger } from '@api/utils/logger';
import { startSession } from 'mongoose';
import { User, UserPreference } from '@app/api/db/models';

export const findOneOrCreateUser = async (walletAddress: string) => {
  try {
    const user = await User.findOne({ wallet_address: walletAddress });

    if (user) {
      return user;
    }

    const session = await startSession();

    session.startTransaction();
    const newUser = new User({ wallet_address: walletAddress });

    await newUser.save();
    await UserPreference.create({ user_id: newUser._id });

    await session.commitTransaction();

    return newUser;
  } catch (error) {
    logger.error(error);
  }
};
