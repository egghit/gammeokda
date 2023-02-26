import angryAnimation from './Egg_Angry.webm';
import funAnimation from './Egg_Fun.webm';
import growthAnimation from './Egg_Growth.webm';
import happyAnimation from './Egg_Happy.webm';
import sadAnimation from './Egg_Sad.webm';
import strokeAnimation from './Egg_Stroke.webm';
import { ReactComponent as Egg } from '../Damagochi_egg.svg';

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
