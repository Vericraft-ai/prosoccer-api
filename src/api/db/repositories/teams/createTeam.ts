import { User } from '@api/db/models';
import { Teams } from '@api/db/models/teams';
import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';

export const createTeam = async (teamPayload: any) => {
  try {
    const user = await User.findOne({ user_id: teamPayload.user_id });
    if (!user?.id) {
      logger.error(`User not found with id: ${teamPayload.user_id}`);
      return;
    }
    const team = await Teams.findOne({ user_id: teamPayload.user_id });

    if (team?.id) {
      logger.error(`Team already exists with id: ${teamPayload.user_id}`);
      return team;
    }

    logger.info('Creating team', { teamPayload });
    const operation = async () => {
      const newTeam = new Teams(teamPayload);
      return await newTeam.save();
    };
    return await sessionCommiter(operation);
  } catch (error) {
    logger.error(error);
  }
};
