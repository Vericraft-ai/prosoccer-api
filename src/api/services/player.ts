import { createPlayer } from '@api/db/repositories/player/createPlayer';
import { findPlayer } from '@api/db/repositories/player/findPlayer';
import { updatePlayer } from '@api/db/repositories/player/updatePlayer';
import { createPlayerAttributes } from '@api/db/repositories/playerAttributes/createAttributes';
import { IAttributes } from '@api/interfaces/attributes';
import { IPlayer, PlayerPosition } from '@api/interfaces/player';

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

const isValidPlayerPosition = (position: string) => {
  if (position in PlayerPosition) {
    return true;
  }
  return false;
};
