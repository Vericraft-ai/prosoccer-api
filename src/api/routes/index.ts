import { Router } from 'express';
import authRoutes from './auth';
import teamRoutes from './team';
import playerRoutes from './player';
const router = Router();

router.use('/auth', authRoutes);
router.use('/team', teamRoutes);
router.use('/player', playerRoutes);
export default router;
