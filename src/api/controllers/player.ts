import { findTeamById } from '@api/db/repositories/teams/findTeamById';
import { ExpressRequest } from '@app/types/types';
import {
  createPlayerAndAttrb,
  updatePlayerDetails,
  getPlayerAttributes as findPlayerAttrb,
  findPlayerByPlayerIdOrTokenUri,
} from '@services/player';
import { Response } from 'express';

/**
 *
 * @param req {ExpressRequest, user: {_id: string}, body: {attributes: {condition: number, potential: number, overall: number, speed: number, strength: number, skill: number, shooting: number, passing: number, defending: number}, player: {position: string, name: string, age: number}}
 * @param res
 * @returns player object
 */
export const createPlayerAttributes = async (
  req: ExpressRequest,
  res: Response
) => {
  if (!req?.user?._id) {
    res.status(401).json({ message: 'Unauthenticated user' });
    return;
  }
  const team = await findTeamById({ userId: req.user._id });
  if (!team?._id) {
    res.status(403).json({ message: 'Bad request, Team not found' });
    return;
  }
  console.log(team._id);
  const payload = {
    ...req.body,
  };
  payload.player.team = team._id;
  const player = await createPlayerAndAttrb(payload);
  res.json(player);
};

/**
 * @param req {ExpressRequest, user: {_id: string}, params: {playerId: string}, body: {name: string, age: number, position: string, team: string, attributes: {condition: number, potential: number, overall: number, speed: number, strength: number, skill: number, shooting: number, passing: number, defending: number}
 * @param res
 */

export const updatePlayerDetail = async (
  req: ExpressRequest,
  res: Response
) => {
  if (!req?.user?._id) {
    res.status(401).json({ message: 'Unauthenticated user' });
    return;
  }
  const payload = {
    ...req.body,
    id: req.params.playerId,
  };
  const player = await updatePlayerDetails(payload);
  res.json(player);
};

export const getPlayerAttributes = async (
  req: ExpressRequest,
  res: Response
) => {
  const player = await findPlayerAttrb(req.params.playerId);
  res.json(player);
};

export const findPlayerByPlayerIdOrToken = async (
  req: ExpressRequest,
  res: Response
) => {
  if (req.params.tokenUri) {
    return await findPlayerByPlayerIdOrTokenUri({
      tokenUri: req.params.tokenUri,
    });
  }
  const player = await findPlayerByPlayerIdOrTokenUri({
    playerId: req.params.playerId,
  });
  res.json(player);
};
