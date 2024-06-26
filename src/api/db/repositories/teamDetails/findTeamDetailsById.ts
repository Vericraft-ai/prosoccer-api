import { TeamDetails } from '@api/db/models/teamDetails';
import { logger } from '@api/utils/logger';

type Payload = {
  teamId: string;
  teamDetailsId: string;
};
export const findTeamDetailsById = async ({
  teamDetailsId,
  teamId,
}: Payload) => {
  try {
    logger.debug('Finding team details by id', { teamDetailsId, teamId });
    const teamDetails = await TeamDetails.findOne({
      $or: [{ _id: teamDetailsId }, { team: teamId }],
    }).populate('team');
    if (!teamDetails?.id) {
      logger.error(
        `Team details not found with id: ${teamDetailsId} and team_id: ${teamId}`
      );
      throw new Error(`Team details not found with id: ${teamDetailsId}`);
    }
    logger.debug('Team details:', { teamDetails });
    return teamDetails;
  } catch (error) {
    logger.error(error);
  }
};
