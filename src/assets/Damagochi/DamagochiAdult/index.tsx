import angryAnimation from './adult_angry.webm';
import { ReactComponent as Adult } from './adult_default.svg';
import delightAnimation from './adult_delight.webm';
import happyAnimation from './adult_happy.webm';
import sadAnimation from './adult_sad.webm';
import strokeAnimation from './adult_stroke.webm';

export const makeDamagochiAnimation = (webp: string) => {
  return (
    <video width="120px" height="120px" autoPlay loop muted>
      <source src={webp} type="video/webm" />
    </video>
  );
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
