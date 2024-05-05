import { Router } from 'express';
import {
  generateNonce,
  verify,
  logout,
  getActiveProfile,
} from '../controllers/auth';

const router = Router();

router.get('/generate-nonce', async (request, response) =>
  generateNonce(request, response)
);

router.post('/verify', async (request, response) => verify(request, response));

router.get('/logout', async (request, response) => logout(request, response));

router.get('/profile', async (request, response) =>
  getActiveProfile(request, response)
);

export default router;
