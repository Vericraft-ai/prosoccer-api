import { Attributes } from '@api/db/models/attributes';
import { IAttributes } from '@api/interfaces/attributes';
import { logger } from '@api/utils/logger';

type UpdatePlayer = Partial<Omit<IAttributes, '_id'>>;

export const updatePlayerAttributes = async (
  payload: UpdatePlayer & { id: string }
) => {
  try {
    return await Attributes.findByIdAndUpdate({ _id: payload.id }, payload, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    logger.error(error);
  }
};
