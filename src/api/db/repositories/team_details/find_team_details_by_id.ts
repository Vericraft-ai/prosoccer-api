import { TeamDetails } from '@api/db/models/team_details';
import { logger } from '@api/utils/logger';

type Payload = {
  team_id: string;
  team_details_id: string;
};
export const findTeamDetailsById = async ({
  team_details_id,
  team_id,
}: Payload) => {
  try {
    logger.info('Finding team details by id', { team_details_id, team_id });
    const teamDetails = await TeamDetails.find()
      .or([{ _id: team_details_id }, { team_id }])
      .populate('team_id');
    if (!teamDetails?.length) {
      logger.error(`Team details not found with id: ${team_details_id} and team_id: ${team_id}`);
      throw new Error(`Team details not found with id: ${team_details_id}`);
    }
    logger.info('Team details:', { teamDetails });
    return teamDetails;
  } catch (error) {
    logger.error(error);
  }
};
