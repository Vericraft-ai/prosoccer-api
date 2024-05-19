import {
  createPlayerAttributes,
  findPlayerByPlayerIdOrToken,
  getPlayerAttributes,
  updatePlayerDetail,
} from '@api/controllers/player';
import { Router } from 'express';

const router = Router();

router.post('/create-player', async (request, response) => {
  return createPlayerAttributes(request, response);
});

router.get('/player-attributes/:playerId', async (request, response) => {
  return getPlayerAttributes(request, response);
});

router.get('/:playerId', async (request, response) => {
  return findPlayerByPlayerIdOrToken(request, response);
});

router.get('/:tokenUri', async (request, response) => {
  return findPlayerByPlayerIdOrToken(request, response);
});

router.put('/update-player/:playerId', async (request, response) => {
  return updatePlayerDetail(request, response);
});

export default router;
