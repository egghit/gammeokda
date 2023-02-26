import * as cors from 'cors';
import * as express from 'express';
import * as functions from 'firebase-functions';

import authRouter from './apis/auth';
import diaryRouter from './apis/diary';
import tamagotchiRouter from './apis/tamagotchi';

const app = express();
app.use(express.json());

app.use(cors());

app.use('/auth', authRouter);
app.use('/diary', diaryRouter);
app.use('/tamagotchi', tamagotchiRouter);

app.get('/', (_, res) => res.send('Api server running'));

exports.api = functions.runWith({ secrets: ['SERVICE_ACCOUNT_KEY'] }).https.onRequest(app);
