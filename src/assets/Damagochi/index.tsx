import AdultAnimation from './DamagochiAdult';
import BabyAnimation from './DamagochiBaby';
import EggAnimation from './DamagochiEgg';

export const makeDamagochiAnimation = (webp: string) => {
  return (
    <video>
      <source src={webp} type="video/webm" />
    </video>
  );
};

export const DamagochiState = {
  egg: EggAnimation,
  baby: BabyAnimation,
  adult: AdultAnimation,
};
