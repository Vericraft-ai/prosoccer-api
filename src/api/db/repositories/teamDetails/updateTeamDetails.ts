import { TeamDetails } from '@api/db/models/teamDetails';
import { ITeamDetails } from '@api/interfaces/teamDetails';
import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';

type Payload = {
  teamId: string;
  payload: Partial<Omit<ITeamDetails, 'teamId'>>;
};

export const updateTeamDetails = async (payload: Payload) => {
  try {
    const team = await TeamDetails.findById(payload.teamId);
    if (!team?._id) {
      logger.error(`Team not found with id: ${payload.teamId}`);
      throw new Error(`Team not found with id: ${payload.teamId}`);
    }
    const operation = async () =>
      await TeamDetails.findOneAndUpdate(
        { teamId: payload.teamId },
        payload.payload,
        {
          new: true,
          runValidators: true,
        }
      );

    const teamDetails = await sessionCommiter(operation);
    return teamDetails;
  } catch (error) {
    logger.error(error);
  }
};
