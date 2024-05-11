import { createTeam } from '@api/db/repositories/teams/createTeam';
import { findTeamById } from '@api/db/repositories/teams/findTeamById';
import { generateTeamLogo, getShortName } from './helpers/teamHelpers';
import { ExpressRequest } from '@app/types/types';
import {
  Formation,
  ITeamDetails,
  PlayStyle,
} from '@api/interfaces/team_details';
import { ObjectId } from 'mongoose';
import { createTeamDetails } from '@api/db/repositories/team_details/create_team_details';
import { findTeamDetailsById } from '@api/db/repositories/team_details/find_team_details_by_id';
import { updateTeamById } from '@api/db/repositories/teams/updateTeamById';
import { ITeams } from '@api/interfaces/teams';
import { updateTeamDetails } from '@api/db/repositories/team_details/update_team_details';

type Team = Omit<ITeams, '_id'>;

export const createNewTeam = async (payload: any) => {
  const data = {
    ...payload,
    logo_url: await generateTeamLogo(payload.team_name),
    short_form: getShortName(payload.team_name),
  };
  const team = await createTeam(data);
  const teamDetailsPayload: ITeamDetails = {
    team_id: team?._id as ObjectId,
    tactics: {
      formation: Formation.FOUR_FOUR_TWO_A,
      formation_style: PlayStyle.BALANCED,
    },
  };
  await createTeamDetails(teamDetailsPayload);
  return team;
};

export const updateTeam = async (teamId: string, data: Partial<Team>) => {
  return await updateTeamById(teamId, data);
};

export const updateTeamDetailsById = async (
  teamId: string,
  data: Partial<ITeamDetails>
) => {
  return await updateTeamDetails({ teamId, payload: data });
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

export const getTeamDetailsById = async (id: string) => {
  return await findTeamDetailsById({ team_id: id, team_details_id: id });
};
