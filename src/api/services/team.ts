import { createTeam } from '@api/db/repositories/teams/createTeam';
import { findTeamById } from '@api/db/repositories/teams/findTeamById';
import { getShortName } from './helpers/teamHelpers';
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
import { createTeamSheet } from '@api/db/repositories/teamSheet/createTeamSheet';
import {
  TeamSheetPayload,
  updateTeamSheet,
} from '@api/db/repositories/teamSheet/updateTeamSheet';
import { findAllPlayersInTeam } from '@api/db/repositories/player/findPlayer';
import { findTeamSheet } from '@api/db/repositories/teamSheet/findTeamSheet';

type Team = Omit<ITeams, '_id'>;

export const createNewTeam = async (payload: any) => {
  const data = {
    ...payload,
    logoUrl: 'randomlogoUrl',
    shortForm: getShortName(payload.teamName),
  };
  const team = await createTeam(data);
  const teamDetailsPayload: ITeamDetails = {
    team: team?._id as ObjectId,
    tactics: {
      formation: Formation.FOUR_FOUR_TWO_A,
      formationStyle: PlayStyle.BALANCED,
    },
  };
  const teamDetails = await createTeamDetails(teamDetailsPayload);

  const teamSheeet = {
    team: team?.id,
    teamDetails: teamDetails?.id,
  };
  await createTeamSheet(teamSheeet);
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

export const getTeamByIdOrTeamId = async (
  req: ExpressRequest,
  teamId?: string
) => {
  if (teamId) {
    const team = await findTeamById({ teamId });
    return team;
  }
  const team = await findTeamById({ userId: req?.user?._id });
  return team;
};

export const getTeamDetailsById = async (id: string) => {
  return await findTeamDetailsById({ teamId: id, teamDetailsId: id });
};

export const updateTeamSheetDetails = async (payload: TeamSheetPayload) => {
  return await updateTeamSheet(payload);
};

export const findPlayersInTeam = async (teamId: string) => {
  return await findAllPlayersInTeam(teamId);
};

export const getTeamSheet = async (teamId: string) => {
  return await findTeamSheet(teamId);
};
