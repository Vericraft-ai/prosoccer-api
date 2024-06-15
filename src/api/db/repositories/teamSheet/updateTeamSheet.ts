import { TeamSheet } from '@api/db/models/teamSheet';
import { ITeamSheet } from '@api/interfaces/teamSheet';
import { logger } from '@api/utils/logger';

export type TeamSheetPayload = Partial<Omit<ITeamSheet, '_id'>> & {
  id: string;
  query?: Record<string, any>;
};

export const updateTeamSheet = async (payload: TeamSheetPayload) => {
  try {
    return await TeamSheet.findByIdAndUpdate(
      { _id: payload.id },
      payload.query,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    logger.error(error);
  }
};
