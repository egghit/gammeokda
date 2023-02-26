import emotionIcon from '@/assets/emotionIcon';

export const filterEmotion = (emotion: string) => {
  if (emotion === '행복') return emotionIcon.happyActive;
  if (emotion === '슬픔') return emotionIcon.sadActive;
  if (emotion === '기쁨') return emotionIcon.delightActive;
  if (emotion === '쏘쏘') return emotionIcon.sosoActive;
  if (emotion === '화남') return emotionIcon.angryActive;
};
