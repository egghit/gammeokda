/*
import { Router, Request, Response } from 'express';

import { login } from './service';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).send();
});

router.post('/', async (req: Request, res: Response) => {
  const { code: authCode } = req.body;

  if (!authCode) {
    res.status(401).json({ message: '유효하지 않은 인증 정보입니다' });
  }

  try {
    const token = await login(authCode);

    const cookieOptions: CookieOptions = {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    };
    res.cookie('token', token, cookieOptions);

    res.status(200).send(token);
  } catch (err) {
    res.status(401).json({ message: '유효하지 않은 인증 정보입니다' });
  }
});

interface CookieOptions {
  httpOnly: boolean;
  sameSite: boolean | 'lax' | 'strict' | 'none';
  maxAge: number;
  signed?: boolean;
}

export default router;
*/
