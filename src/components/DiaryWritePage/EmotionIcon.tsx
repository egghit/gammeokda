import { Emotion } from '@/@types/types';
import emotionIcon from '@/assets/emotionIcon';

interface EmotionIconProps {
  category: Emotion;
  selected: boolean;
}

const EmotionIcon = ({ category, selected }: EmotionIconProps) => {
  switch (category) {
    case 'happy':
      return selected ? emotionIcon.happyActive : emotionIcon.happyDisabled;
    case 'delight':
      return selected ? emotionIcon.delightActive : emotionIcon.delightDisabled;
    case 'sad':
      return selected ? emotionIcon.sadActive : emotionIcon.sadDisabled;
    case 'angry':
      return selected ? emotionIcon.angryActive : emotionIcon.angryDisabled;
    default:
      return selected ? emotionIcon.sosoActive : emotionIcon.sosoDisabled;
  }
};

export default EmotionIcon;
