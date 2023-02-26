import { Emotion } from '@/@types/types';
import { ReactComponent as AngryFace } from '@/assets/AngryFace.svg';
import { ReactComponent as DisabledAngryFace } from '@/assets/AngryFace_disabled.svg';
import { ReactComponent as DelightfulFace } from '@/assets/DelightfulFace.svg';
import { ReactComponent as DisabledDelightfulFace } from '@/assets/DelightfulFace_disabled.svg';
import { ReactComponent as HappyFace } from '@/assets/HappyFace.svg';
import { ReactComponent as DisabledHappyFace } from '@/assets/HappyFace_disabled.svg';
import { ReactComponent as SadFace } from '@/assets/SadFace.svg';
import { ReactComponent as DisabledSadFace } from '@/assets/SadFace_disabled.svg';
import { ReactComponent as SosoFace } from '@/assets/SosoFace.svg';
import { ReactComponent as DisabledSosoFace } from '@/assets/SosoFace_disabled.svg';

interface EmotionIconProps {
  category: Emotion;
  selected: boolean;
}

const EmotionIcon = ({ category, selected }: EmotionIconProps) => {
  switch (category) {
    case '행복':
      return selected ? <SadFace /> : <DisabledHappyFace />;
    case '기쁨':
      return selected ? <DelightfulFace /> : <DisabledDelightfulFace />;
    case '슬픔':
      return selected ? <SadFace /> : <DisabledSadFace />;
    case '화남':
      return selected ? <AngryFace /> : <DisabledAngryFace />;
    default:
      return selected ? <SosoFace /> : <DisabledSosoFace />;
  }
};

export default EmotionIcon;
