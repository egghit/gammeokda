import { Timestamp } from 'firebase/firestore';

export type Emotion = '기쁨' | '슬픔' | '행복' | '쏘쏘' | '화남';

export interface DiaryContent {
  id: string;
  date: string | Date | Timestamp;
  text?: string;
  photo?: string;
  emotion: Emotion;
}
