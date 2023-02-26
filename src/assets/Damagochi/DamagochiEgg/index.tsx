import angryAnimation from './egg_angry.webm';
import funAnimation from './egg_fun.webm';
import growthAnimation from './egg_growth.webm';
import happyAnimation from './egg_happy.webm';
import sadAnimation from './egg_sad.webm';
import strokeAnimation from './egg_stroke.webm';
import { ReactComponent as Egg } from '../damagochi_egg.svg';

const makeDamagochiAnimation = (webp: string) => {
  return (
    <video width="150px" height="150px" autoPlay loop muted>
      <source src={webp} type="video/webm" />
    </video>
  );
};

const EggAnimation = {
  angry: makeDamagochiAnimation(angryAnimation),
  sad: makeDamagochiAnimation(sadAnimation),
  growth: makeDamagochiAnimation(growthAnimation),
  happy: makeDamagochiAnimation(happyAnimation),
  stroke: makeDamagochiAnimation(strokeAnimation),
  fun: makeDamagochiAnimation(funAnimation),
  default: <Egg />,
};

export default EggAnimation;
