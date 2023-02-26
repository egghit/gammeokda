import AdultAnimation from './damagochiAdult';
import BabyAnimation from './damagochiBaby';
import EggAnimation from './damagochiEgg';

export const makeDamagochiAnimation = (webp: string) => {
  return (
    <video>
      <source src={webp} type="video/webm" />
    </video>
  );
};

export const DamagochiAnimation = {
  egg: EggAnimation,
  baby: BabyAnimation,
  adult: AdultAnimation,
};
