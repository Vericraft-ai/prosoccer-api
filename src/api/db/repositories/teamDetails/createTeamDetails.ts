import { TeamDetails } from '@api/db/models/teamDetails';
import { ITeamDetails } from '@api/interfaces/teamDetails';
import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';
import { Teams } from '@api/db/models/teams';

export const createTeamDetails = async (payload: ITeamDetails) => {
  if (!payload.teamId) {
    logger.error('Team id is required');
    return;
  }
  try {
    const team = await Teams.findById(payload.teamId);
    if (!team?.id) {
      logger.error(`Team not found with id: ${payload.teamId}`);
      throw new Error(`Team not found with id: ${payload.teamId}`);
    }

    const operation = async () => {
      const teamDetails = new TeamDetails(payload);
      return await teamDetails.save();
    };
    const teamDetails = await sessionCommiter(operation);
    return teamDetails;
  } catch (error) {
    logger.error(error);
  }
};
