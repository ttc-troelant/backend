import { Router } from 'express';
import eventsRouter from './events';

const router = Router();

router.get('/', (req, res) => {
  res.send('Calendar main endpoint');
});

router.use('/events', eventsRouter);

export default router;