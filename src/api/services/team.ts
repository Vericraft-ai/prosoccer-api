import { createTeam } from '@api/db/repositories/teams/createTeam';
import { findTeamById } from '@api/db/repositories/teams/findTeamById';
import { generateTeamLogo, getShortName } from './helpers/teamHelpers';
import { ExpressRequest } from '@app/types/types';
import {
  Formation,
  ITeamDetails,
  PlayStyle,
} from '@api/interfaces/teamDetails';
import { ObjectId } from 'mongoose';
import { createTeamDetails } from '@api/db/repositories/teamDetails/createTeamDetails';
import { findTeamDetailsById } from '@api/db/repositories/teamDetails/findTeamDetailsById';
import { updateTeamById } from '@api/db/repositories/teams/updateTeamById';
import { ITeams } from '@api/interfaces/teams';
import { updateTeamDetails } from '@api/db/repositories/teamDetails/updateTeamDetails';

type Team = Omit<ITeams, '_id'>;

export const createNewTeam = async (payload: any) => {
  const data = {
    ...payload,
    logoUrl: await generateTeamLogo(payload.teamName),
    shortForm: getShortName(payload.teamName),
  };
  const team = await createTeam(data);
  const teamDetailsPayload: ITeamDetails = {
    teamId: team?._id as ObjectId,
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
  teamId?: string
) => {
  if (teamId) {
    const team = await findTeamById({ teamId });
    return team;
  }
  const team = await findTeamById({ teamId: req?.user?._id });
  return team;
};

export const getTeamDetailsById = async (id: string) => {
  return await findTeamDetailsById({ teamId: id, teamDetailsId: id });
};
