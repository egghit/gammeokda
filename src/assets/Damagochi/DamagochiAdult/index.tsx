import angryAnimation from './adult_angry.webm';
import funAnimation from './adult_fun.webm';
import happyAnimation from './adult_happy.webm';
import sadAnimation from './adult_sad.webm';
import strokeAnimation from './adult_stroke.webm';
import { ReactComponent as Adult } from '../damagochi_adult.svg';

const makeDamagochiAnimation = (webp: string) => {
  return (
    <video width="150px" height="150px" autoPlay loop muted>
      <source src={webp} type="video/webm" />
    </video>
  );
};

const AdultAnimation = {
  angry: makeDamagochiAnimation(angryAnimation),
  sad: makeDamagochiAnimation(sadAnimation),
  happy: makeDamagochiAnimation(happyAnimation),
  stroke: makeDamagochiAnimation(strokeAnimation),
  fun: makeDamagochiAnimation(funAnimation),
  growth: <Adult />,
  default: <Adult />,
};

export default AdultAnimation;
