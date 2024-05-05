import { Router } from 'express';
import { generateNonce } from '../controllers/auth';

const router = Router();

router.post('/generate-nonce', async (request, response) =>
  generateNonce(request, response)
);

export default router;
