import { PlayerPosition } from '@api/interfaces/player';

export const isValidPlayerPosition = (position: string) => {
  if (position in PlayerPosition) {
    return true;
  }
  return false;
};
