import { TeamSheet } from '@api/db/models/teamSheet';
import { ITeamSheet } from '@api/interfaces/teamSheet';
import { logger } from '@api/utils/logger';
import { sessionCommiter } from '../utils/sessionCommiter';

export const createTeamSheet = async (payload: ITeamSheet) => {
  if (!payload.team) {
    logger.debug('Team id is required');
    return;
  }
  try {
    const operation = async () => {
      const teamSheet = new TeamSheet(payload);
      return await teamSheet.save();
    };
    return await sessionCommiter(operation);
  } catch (error) {
    logger.error(error);
  }
};

// const sheetOverAll = async (playerIds: string[]) => {
//     try {
//         for (let i = 0; i < playerIds.length; i++) {
//             const player = await Player.findById(playerIds[i]);
//             if (player?._id) {

//             }
//         }
//     } catch (error) {
//         logger.error(error);
//     }
// }
