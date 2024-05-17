import { createPlayer } from '@api/db/repositories/player/createPlayer';
import { findPlayer } from '@api/db/repositories/player/findPlayer';
import { updatePlayer } from '@api/db/repositories/player/updatePlayer';
import { createPlayerAttributes } from '@api/db/repositories/playerAttributes/createAttributes';
import { updatePlayerAttributes } from '@api/db/repositories/playerAttributes/updatePlayerAttributes';
import { IAttributes } from '@api/interfaces/attributes';
import { IPlayer } from '@api/interfaces/player';
import { isValidPlayerPosition } from './helpers/isValidPlayerPosition';
import { findPlayerAttributes } from '@api/db/repositories/playerAttributes/findPlayerAttributes';

type PlayerPayload = {
  attributes: Pick<
    IAttributes,
    | 'condition'
    | 'potential'
    | 'overall'
    | 'speed'
    | 'strength'
    | 'skill'
    | 'shooting'
    | 'passing'
    | 'defending'
  >;
  player: Omit<IPlayer, '_id'>;
};

export const createPlayerAndAttrb = async (pyload: PlayerPayload) => {
  const { attributes, player } = pyload;

  if (!isValidPlayerPosition(player.position)) {
    throw new Error('Invalid player position');
  }

  const newPlayer = await createPlayer(player);
  let attrb;
  if (newPlayer?.id) {
    attrb = await createPlayerAttributes({
      ...attributes,
      playerId: newPlayer.id,
    });
  }

  return { ...newPlayer, attributes: attrb };
};

export const updatePlayerDetails = async (
  payload: Partial<IPlayer> & { id: string }
) => {
  const player = await findPlayer({ playerId: payload.id });
  if (!player?._id) {
    throw new Error('Player not found');
  }
  return await updatePlayer(payload);
};

export const findPlayerByPlayerIdOrTokenUri = async (payload: {
  playerId?: string;
  tokenUri?: string;
}) => {
  return await findPlayer(payload);
};

export const updatePlayerAttributesById = async (
  payload: PlayerPayload['attributes'] & { id: string }
) => {
  const { id, ...attributes } = payload;
  return await updatePlayerAttributes({ id, ...attributes });
};

export const getPlayerAttributes = async (playerId: string) => {
  const playerAttrbs = await findPlayerAttributes({
    playerId: playerId,
    id: playerId,
  });
  if (!playerAttrbs?._id) {
    throw new Error('Player not found');
  }
  return playerAttrbs;
};
