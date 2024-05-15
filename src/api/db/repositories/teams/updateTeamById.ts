import { Teams } from '@api/db/models/teams';
import { ITeams } from '@api/interfaces/teams';
import { logger } from '@api/utils/logger';
type Team = Omit<ITeams, '_id'>;

export const updateTeamById = async (teamId: string, data: Partial<Team>) => {
  try {
    const team = await Teams.findByIdAndUpdate({ _id: teamId }, data, {
      new: true,
      runValidators: true,
    });
    return team;
  } catch (error) {
    logger.error(error);
  }
};
