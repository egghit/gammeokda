export type Emotion = '기쁨' | '슬픔' | '행복' | '쏘쏘' | '화남';

export interface Diary {
  id: string;
  date: string | Date;
  text?: string;
  photo: string;
  emotion: Emotion;
}
