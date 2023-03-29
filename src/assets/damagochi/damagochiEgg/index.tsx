import angryAnimation from './egg_angry.svg';
import { ReactComponent as Egg } from './egg_default.svg';
import delightAnimation from './egg_delight.svg';
import growthAnimation from './egg_growth.svg';
import happyAnimation from './egg_happy.svg';
import sadAnimation from './egg_sad.svg';
import strokeAnimation from './egg_stroke.svg';
import { MakeDamagochiAnimation } from '../damagochiAdult';

const EggAnimation = {
  angry: <MakeDamagochiAnimation svg={angryAnimation} />,
  sad: <MakeDamagochiAnimation svg={sadAnimation} />,
  happy: <MakeDamagochiAnimation svg={happyAnimation} />,
  stroke: <MakeDamagochiAnimation svg={strokeAnimation} />,
  delight: <MakeDamagochiAnimation svg={delightAnimation} />,
  growth: <MakeDamagochiAnimation svg={growthAnimation} />,
  default: <Egg />,
};

export default EggAnimation;
