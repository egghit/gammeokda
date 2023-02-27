import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).json({ status: 'alive' });
});

export default router;
