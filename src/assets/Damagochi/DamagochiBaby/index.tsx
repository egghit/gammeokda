import angryAnimation from './baby_angry.webm';
import delightAnimation from './baby_delight.webm';
import growthAnimation from './baby_growth.webm';
import happyAnimation from './baby_happy.webm';
import sadAnimation from './baby_sad.webm';
import strokeAnimation from './baby_stroke.webm';
import { ReactComponent as Baby } from '../damagochi_baby.svg';

const makeDamagochiAnimation = (webp: string) => {
  return (
    <video width="150px" height="150px" autoPlay loop muted>
      <source src={webp} type="video/webm" />
    </video>
  );
};

const BabyAnimation = {
  angry: makeDamagochiAnimation(angryAnimation),
  sad: makeDamagochiAnimation(sadAnimation),
  growth: makeDamagochiAnimation(growthAnimation),
  happy: makeDamagochiAnimation(happyAnimation),
  stroke: makeDamagochiAnimation(strokeAnimation),
  delight: makeDamagochiAnimation(delightAnimation),
  default: <Baby />,
};

export default BabyAnimation;
