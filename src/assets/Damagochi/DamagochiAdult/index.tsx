import angryAnimation from './Adult_Angry.webm';
import funAnimation from './Adult_Fun.webm';
import happyAnimation from './Adult_Happy.webm';
import sadAnimation from './Adult_Sad.webm';
import strokeAnimation from './Adult_Stroke.webm';
import { ReactComponent as Adult } from '../Damagochi_adult.svg';

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
  default: <Adult />,
};

export default AdultAnimation;
