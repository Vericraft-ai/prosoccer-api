import { TeamSheet } from '@api/db/models/teamSheet';
import { ITeamSheet } from '@api/interfaces/teamSheet';

export const findTeamSheet = async (
  teamid: string
): Promise<ITeamSheet | null> => {
  try {
    const teamSheet = await TeamSheet.findOne({ team: teamid })
      .populate('team')
      .populate('players')
      .populate('teamDetails');
    return teamSheet;
  } catch (error) {
    return null;
  }
};
