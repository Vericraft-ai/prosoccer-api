import { Teams } from '@api/db/models/teams';
import { logger } from '@api/utils/logger';

type Payload = {
  teamId?: string;
  userId?: string;
};
export const findTeamById = async ({ teamId, userId }: Payload) => {
  try {
    logger.debug('Finding team by id', { teamId, userId });
    const team = await Teams.findOne({ $or: [{ _id: teamId }, { userId }] });
    if (!team?.id) {
      logger.debug(`Team not found with id: ${teamId}`);
      throw new Error(`Team not found with id: ${teamId}`);
    }
    return team;
  } catch (error) {
    logger.error(error);
  }
};
