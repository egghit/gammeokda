import angryAnimation from './egg_angry.svg';
import { ReactComponent as Egg } from './egg_default.svg';
import delightAnimation from './egg_delight.svg';
import growthAnimation from './egg_growth.svg';
import happyAnimation from './egg_happy.svg';
import sadAnimation from './egg_sad.svg';
import strokeAnimation from './egg_stroke.svg';
import { makeDamagochiAnimation } from '../damagochiAdult';

const EggAnimation = {
  angry: makeDamagochiAnimation(angryAnimation),
  sad: makeDamagochiAnimation(sadAnimation),
  happy: makeDamagochiAnimation(happyAnimation),
  stroke: makeDamagochiAnimation(strokeAnimation),
  delight: makeDamagochiAnimation(delightAnimation),
  growth: makeDamagochiAnimation(growthAnimation),
  default: <Egg />,
};

export default EggAnimation;
