import { Teams } from '@api/db/models/teams';
import { logger } from '@api/utils/logger';

type Payload = {
  team_id?: string;
  user_id?: string;
};
export const findTeamById = async ({ team_id, user_id }: Payload) => {
  try {
    logger.info('Finding team by id', { team_id, user_id });
    const team = await Teams.findOne({ $or: [{ _id: team_id }, { user_id }] });
    if (!team?.id) {
      logger.error(`Team not found with id: ${team_id}`);
      throw new Error(`Team not found with id: ${team_id}`);
    }
    return team;
  } catch (error) {
    logger.error(error);
  }
};
