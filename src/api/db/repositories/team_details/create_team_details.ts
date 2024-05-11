import { TeamDetails } from '@api/db/models/team_details';
import { ITeamDetails } from '@api/interfaces/team_details';
import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';
import { Teams } from '@api/db/models/teams';

export const createTeamDetails = async (payload: ITeamDetails) => {
  if (!payload.team_id) {
    logger.error('Team id is required');
    return;
  }
  try {
    const team = await Teams.findById(payload.team_id);
    if (!team?.id) {
      logger.error(`Team not found with id: ${payload.team_id}`);
      throw new Error(`Team not found with id: ${payload.team_id}`);
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
