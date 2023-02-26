import angryAnimation from './Baby_Angry.webm';
import funAnimation from './Baby_Fun.webm';
import growthAnimation from './Baby_Growth.webm';
import happyAnimation from './Baby_Happy.webm';
import sadAnimation from './Baby_Sad.webm';
import strokeAnimation from './Baby_Stroke.webm';
import { ReactComponent as Baby } from '../Damagochi_baby.svg';

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
  fun: makeDamagochiAnimation(funAnimation),
  default: <Baby />,
};

export default BabyAnimation;
