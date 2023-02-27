import { Emotion } from '@/@types/types';
import emotionIcon from '@/assets/emotionIcon';

interface EmotionIconProps {
  category: Emotion;
  selected: boolean;
}

const EmotionIcon = ({ category, selected }: EmotionIconProps) => {
  switch (category) {
    case '행복':
      return selected ? emotionIcon.happyActive : emotionIcon.happyDisabled;
    case '기쁨':
      return selected ? emotionIcon.delightActive : emotionIcon.delightDisabled;
    case '슬픔':
      return selected ? emotionIcon.sadActive : emotionIcon.sadDisabled;
    case '화남':
      return selected ? emotionIcon.angryActive : emotionIcon.angryDisabled;
    default:
      return selected ? emotionIcon.sosoActive : emotionIcon.sosoDisabled;
  }
};

export default EmotionIcon;
