import angryAnimation from './baby_angry.webm';
import { ReactComponent as Baby } from './baby_default.svg';
import delightAnimation from './baby_delight.webm';
import growthAnimation from './baby_growth.webm';
import happyAnimation from './baby_happy.webm';
import sadAnimation from './baby_sad.webm';
import strokeAnimation from './baby_stroke.webm';
import { makeDamagochiAnimation } from '../damagochiAdult';

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
