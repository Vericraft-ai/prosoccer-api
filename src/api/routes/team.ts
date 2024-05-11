import {
  createTeam,
  getTeamById,
  getTeamDetails,
  updateTeam,
  updateTeamDetails,
} from '@api/controllers/team';
import { Router } from 'express';

const router = Router();

router.post('/create-team', async (request, response) =>
  createTeam(request, response)
);

router.get('/:team_id', async (request, response) =>
  getTeamById(request, response)
);

router.get('/team-details/:team_id', async (request, response) => {
  return getTeamDetails(request, response);
});
router.put('/team-details/:team_id', async (request, response) =>
  updateTeamDetails(request, response)
);

router.put('/:team_id', async (request, response) =>
  updateTeam(request, response)
);

export default router;
