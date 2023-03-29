import angryAnimation from './adult_angry.svg';
import { ReactComponent as Adult } from './adult_default.svg';
import delightAnimation from './adult_delight.svg';
import happyAnimation from './adult_happy.svg';
import sadAnimation from './adult_sad.svg';
import strokeAnimation from './adult_stroke.svg';
import * as S from './SpriteStyle.styles';

export const makeDamagochiAnimation = (svg: string) => {
  return <S.ImageContainer src={svg} />;
};

const AdultAnimation = {
  angry: makeDamagochiAnimation(angryAnimation),
  sad: makeDamagochiAnimation(sadAnimation),
  happy: makeDamagochiAnimation(happyAnimation),
  stroke: makeDamagochiAnimation(strokeAnimation),
  delight: makeDamagochiAnimation(delightAnimation),
  growth: <Adult />,
  default: <Adult />,
};

export default AdultAnimation;
