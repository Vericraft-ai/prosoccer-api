import { Router } from 'express';
import authRoutes from './auth';
import teamRoutes from './team';
import playerRoutes from './player';
import marketplace from './marketplace';
import { sendContactUs } from '@api/controllers/contactUs';
import { joinWaitlistController } from '@api/controllers/waitlist';
const router = Router();

router.use('/auth', authRoutes);
router.use('/team', teamRoutes);
router.use('/player', playerRoutes);
router.use('/marketplace', marketplace);
router.post('/contact-us', (req, res) => {
  return sendContactUs(req, res);
});
router.post('/waitlist', (req, res) => {
  return joinWaitlistController(req, res);
});
export default router;
