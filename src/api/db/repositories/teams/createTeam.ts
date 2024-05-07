import { User } from '@api/db/models';
import { Teams } from '@api/db/models/teams';
import { logger } from '@api/utils/logger';
import { startSession } from 'mongoose';

export const createTeam = async (teamPayload: any) => {
  try {
    const user = await User.findOne({ user_id: teamPayload.user_id });
    if (!user?.id) {
      logger.error(`User not found with id: ${teamPayload.user_id}`);
      return
    }
    const team = await Teams.findOne({ user_id: teamPayload.user_id });

    if (team?.id) {
      logger.error(`Team already exists with id: ${teamPayload.user_id}`);
      return team;
    }

    const session = await startSession();
    session.startTransaction();
    logger.info('Creating team', { teamPayload });
    const newTeam = new Teams(teamPayload);
    await newTeam.save();
    await session.commitTransaction();
    return newTeam;
  } catch (error) {
    logger.error(error);
  }
};
