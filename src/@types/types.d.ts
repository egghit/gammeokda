export type Emotion = 'happy' | 'delight' | 'default' | 'sad' | 'angry';

export interface DiaryContent {
  id: string;
  date: {
    seconds: number;
  };
  text?: string;
  photo?: string;
  emotion: Emotion;
}
