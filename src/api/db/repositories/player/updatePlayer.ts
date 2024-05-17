import { Player } from '@api/db/models/player';
import { IPlayer } from '@api/interfaces/player';
import { logger } from '@api/utils/logger';

type UpdatePlayer = Partial<Omit<IPlayer, '_id'>>;

export const updatePlayer = async (payload: UpdatePlayer & { id: string }) => {
  try {
    const player = await Player.findByIdAndUpdate(
      { _id: payload.id },
      payload,
      {
        new: true,
        runValidators: true,
      }
    );
    return player;
  } catch (error) {
    logger.error(error);
  }
};
