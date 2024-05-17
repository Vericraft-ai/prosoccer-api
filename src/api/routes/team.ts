import {
  createTeam,
  findPlayersInTeamByTeamId,
  getTeamById,
  getTeamDetails,
  getTeamSheetDetails,
  updateTeam,
  updateTeamDetails,
} from '@api/controllers/team';
import { Router } from 'express';

const router = Router();

router.post('/create-team', async (request, response) =>
  createTeam(request, response)
);

router.get('/:teamId', async (request, response) =>
  getTeamById(request, response)
);

router.get('/team-details/:teamId', async (request, response) => {
  return getTeamDetails(request, response);
});

router.get('/team/:teamId/players', async (request, response) =>
  findPlayersInTeamByTeamId(request, response)
);

router.get('/team-sheet/:teamId', async (request, response) =>
  getTeamSheetDetails(request, response)
);

router.put('/:teamId', async (request, response) =>
  updateTeam(request, response)
);

router.put('/team-details/:teamId', async (request, response) =>
  updateTeamDetails(request, response)
);

router.put('/team-sheet/:teamSheetId', async (request, response) =>
  updateTeamDetails(request, response)
);

export default router;
