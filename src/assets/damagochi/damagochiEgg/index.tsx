import angryAnimation from './egg_angry.webm';
import { ReactComponent as Egg } from './egg_default.svg';
import delightAnimation from './egg_delight.webm';
import growthAnimation from './egg_growth.webm';
import happyAnimation from './egg_happy.webm';
import sadAnimation from './egg_sad.webm';
import strokeAnimation from './egg_stroke.webm';
import { makeDamagochiAnimation } from '../damagochiAdult';

const EggAnimation = {
  angry: makeDamagochiAnimation(angryAnimation),
  sad: makeDamagochiAnimation(sadAnimation),
  growth: makeDamagochiAnimation(growthAnimation),
  happy: makeDamagochiAnimation(happyAnimation),
  stroke: makeDamagochiAnimation(strokeAnimation),
  delight: makeDamagochiAnimation(delightAnimation),
  default: <Egg />,
};

export default EggAnimation;
