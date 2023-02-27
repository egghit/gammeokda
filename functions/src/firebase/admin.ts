import { initializeApp } from 'firebase-admin/app';

import env from '../config';

const admin = initializeApp({
  serviceAccountId: env.SERVICE_ACCOUNT_ID,
});

export default admin;
