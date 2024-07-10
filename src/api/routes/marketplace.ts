import { getListings } from '@api/controllers/markeplace';
import { Router } from 'express';

const router = Router();

router.get('/listings', (request, response) => getListings(request, response));

export default router;
