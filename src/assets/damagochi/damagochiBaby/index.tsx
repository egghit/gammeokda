import angryAnimation from './baby_angry.svg';
import { ReactComponent as Baby } from './baby_default.svg';
import delightAnimation from './baby_delight.svg';
import growthAnimation from './baby_growth.svg';
import happyAnimation from './baby_happy.svg';
import sadAnimation from './baby_sad.svg';
import strokeAnimation from './baby_stroke.svg';
import { MakeDamagochiAnimation } from '../damagochiAdult';

const BabyAnimation = {
  angry: <MakeDamagochiAnimation svg={angryAnimation} />,
  sad: <MakeDamagochiAnimation svg={sadAnimation} />,
  happy: <MakeDamagochiAnimation svg={happyAnimation} />,
  stroke: <MakeDamagochiAnimation svg={strokeAnimation} />,
  delight: <MakeDamagochiAnimation svg={delightAnimation} />,
  growth: <MakeDamagochiAnimation svg={growthAnimation} />,

  default: <Baby />,
};

export default BabyAnimation;
