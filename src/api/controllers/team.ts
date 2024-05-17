import { ExpressRequest, TeamPayload } from '@app/types/types';
import {
  createNewTeam,
  getTeamDetailsById,
  getTeamByIdOrTeamId,
  updateTeamDetailsById,
  updateTeamSheetDetails,
  getTeamSheet,
} from '@services/team';
import { Response } from 'express';
import { runValidators } from './validators/payloadValidator';
import { updateTeamById } from '@api/db/repositories/teams/updateTeamById';
import { findTeamById } from '@api/db/repositories/teams/findTeamById';

type PayloadValidation = Pick<TeamPayload, 'teamName'>;

export const createTeam = async (
  request: ExpressRequest,
  response: Response
) => {
  if (!request?.user?._id) {
    response.status(401).json({ message: 'Unauthenticated user' });
    return;
  }
  const validation = runValidators<PayloadValidation>(request.body);
  if (!validation?.isValid) {
    response.status(422).json({ message: validation?.message });
    return;
  }
  const payload = {
    ...request.body,
    userId: request.user._id,
  } as TeamPayload;
  const team = await createNewTeam(payload);
  return response.json(team);
};

export const getTeamById = async (
  request: ExpressRequest,
  response: Response
) => {
  const team = await getTeamByIdOrTeamId(request, request.params.teamId);
  if (!team?.id) {
    response.status(404).json({ message: 'Team not found' });
    return;
  }
  return response.json(team);
};

export const getTeamDetails = async (
  request: ExpressRequest,
  response: Response
) => {
  const id = request.params.teamId;
  const teamDetails = await getTeamDetailsById(id);
  if (!teamDetails) {
    response
      .status(400)
      .json({ message: 'Team details not found with that Id' });
    return;
  }
  response.json(teamDetails);
};

export const updateTeam = async (req: ExpressRequest, res: Response) => {
  const teamId = req.params.teamId;
  const data = req.body;
  const team = await updateTeamById(teamId, data);
  res.json(team);
};

export const updateTeamDetails = async (req: ExpressRequest, res: Response) => {
  const teamId = req.params.teamId;
  const data = req.body;
  const teamDetails = await updateTeamDetailsById(teamId, data);
  return res.json(teamDetails);
};

export const updateTeamSheet = async (req: ExpressRequest, res: Response) => {
  const payload = { ...req.body, id: req.params.teamSheetId };
  if (
    !Array.isArray(payload.players) ||
    !Array.isArray(payload.playerPositions)
  ) {
    res.status(400).json({
      message: 'Bad request, players and playerPositions are required',
    });
    return;
  }
  const teamSheet = await updateTeamSheetDetails(payload);
  res.json(teamSheet);
};

export const findPlayersInTeamByTeamId = async (
  req: ExpressRequest,
  res: Response
) => {
  const players = await findTeamById({ teamId: req.params.teamId });
  res.json(players);
};

export const getTeamSheetDetails = async (
  req: ExpressRequest,
  res: Response
) => {
  const teamSheet = await getTeamSheet(req.params.teamId);
  return res.json(teamSheet);
};
