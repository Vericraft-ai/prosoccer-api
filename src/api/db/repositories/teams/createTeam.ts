import { User } from '@api/db/models';
import { Teams } from '@api/db/models/teams';
import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';

export const createTeam = async (teamPayload: any) => {
  try {
    const user = await User.findOne({ _id: teamPayload.userId });
    if (!user?.id) {
      logger.error(`User not found with id: ${teamPayload.userId}`);
      return;
    }
    const team = await Teams.findOne({ user_id: teamPayload.userId });

    if (team?.id) {
      logger.error(`Team already exists with id: ${teamPayload.userId}`);
      return team;
    }

    logger.debug('Creating team', { teamPayload });
    const operation = async () => {
      const newTeam = new Teams(teamPayload);
      return await newTeam.save();
    };
    return await sessionCommiter(operation);
  } catch (error) {
    logger.error(error);
  }
};
