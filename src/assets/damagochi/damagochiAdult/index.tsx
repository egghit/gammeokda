import angryAnimation from './adult_angry.svg';
import { ReactComponent as Adult } from './adult_default.svg';
import delightAnimation from './adult_delight.svg';
import happyAnimation from './adult_happy.svg';
import sadAnimation from './adult_sad.svg';
import strokeAnimation from './adult_stroke.svg';
import * as S from './SpriteStyle.styles';

export const MakeDamagochiAnimation = ({ svg }: { svg: string }) => {
  return <S.ImageContainer src={svg} />;
};

const AdultAnimation = {
  angry: <MakeDamagochiAnimation svg={angryAnimation} />,
  sad: <MakeDamagochiAnimation svg={sadAnimation} />,
  happy: <MakeDamagochiAnimation svg={happyAnimation} />,
  stroke: <MakeDamagochiAnimation svg={strokeAnimation} />,
  delight: <MakeDamagochiAnimation svg={delightAnimation} />,
  growth: <Adult />,
  default: <Adult />,
};

export default AdultAnimation;
