import { Router } from 'express';

import { getDiaries } from './service';

const router = Router();

router.get('/', async (_, res) => {
  const diaries = await getDiaries();

  res.status(200).json({ status: 'alive', data: diaries });
});

export default router;
