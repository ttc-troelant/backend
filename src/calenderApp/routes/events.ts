import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('List of calendar events');
});

router.post('/', (req: Request, res: Response) => {
  res.send('Create a new calendar event');
});

export default router;