import { ExpressRequest, TeamPayload } from '@app/types/types';
import { createNewTeam, getUserByIdOrTeamId } from '@services/team';
import { Response } from 'express';
import { runValidators } from './validators/payloadValidator';
type PayloadValidation = Pick<TeamPayload, 'team_name'>;

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
    user_id: request.user._id,
  } as TeamPayload;
  const team = await createNewTeam(payload);
  response.json(team);
};

export const getTeamById = async (
  request: ExpressRequest,
  response: Response
) => {
  const team = await getUserByIdOrTeamId(request, request.params.team_id);
  if (!team) {
    response.status(404).json({ message: 'Team not found' });
    return;
  }
  response.json(team);
};