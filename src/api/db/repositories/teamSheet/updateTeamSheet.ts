import { TeamSheet } from '@api/db/models/teamSheet';
import { ITeamSheet } from '@api/interfaces/teamSheet';
import { logger } from '@api/utils/logger';

type Payload = Partial<Omit<ITeamSheet, '_id'>>;

export const updateTeamSheet = async (payload: Payload & { id: string }) => {
  try {
    logger.debug('Updating team sheet by', payload);
    return await TeamSheet.findByIdAndUpdate({ _id: payload.id }, payload, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    logger.error(error);
  }
};
