import { createTeam } from '@api/db/repositories/teams/createTeam';
import { findTeamById } from '@api/db/repositories/teams/findTeamById';
import { generateTeamLogo, getShortName } from './helpers/teamHelpers';
import { ExpressRequest } from '@app/types/types';

export const createNewTeam = async (payload: any) => {
  const data = {
    ...payload,
    logo: await generateTeamLogo(payload.team_name),
    short_form: getShortName(payload.team_name),
  };
  return await createTeam(data);
};

export const getUserByIdOrTeamId = async (
  req: ExpressRequest,
  team_id?: string
) => {
  if (team_id) {
    const team = await findTeamById({ team_id });
    return team;
  }
  const team = await findTeamById({ user_id: req?.user?._id });
  return team;
};
