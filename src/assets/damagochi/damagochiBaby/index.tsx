import angryAnimation from './baby_angry.svg';
import { ReactComponent as Baby } from './baby_default.svg';
import delightAnimation from './baby_delight.svg';
import growthAnimation from './baby_growth.svg';
import happyAnimation from './baby_happy.svg';
import sadAnimation from './baby_sad.svg';
import strokeAnimation from './baby_stroke.svg';
import { makeDamagochiAnimation } from '../damagochiAdult';

const BabyAnimation = {
  angry: makeDamagochiAnimation(angryAnimation),
  sad: makeDamagochiAnimation(sadAnimation),
  happy: makeDamagochiAnimation(happyAnimation),
  stroke: makeDamagochiAnimation(strokeAnimation),
  delight: makeDamagochiAnimation(delightAnimation),
  growth: makeDamagochiAnimation(growthAnimation),

  default: <Baby />,
};

export default BabyAnimation;
