import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import Container from '@/components/common/Container';
import Damagochi from '@/components/MainPage/Damagochi';
import ProgressBar, { GROW_COUNT } from '@/components/MainPage/ProgressBar';
import { damagochiState } from '@/store/damagochiState';

export type DamagochiAgeTypes = 'egg' | 'baby' | 'adult';

const IndexPage = () => {
  const [damamgochi, setDamagochi] = useRecoilState(damagochiState);
  const { age, diaryCounting } = damamgochi;

  const growDamagochi = () => {
    switch (age) {
      case 'egg': {
        setTimeout(() => {
          setDamagochi({ ...damamgochi, age: 'baby' });
        }, 2000);
        break;
      }
      case 'baby': {
        setTimeout(() => {
          setDamagochi({ ...damamgochi, age: 'adult' });
        }, 2000);
        break;
      }
    }
  };

  useEffect(() => {
    if (diaryCounting === GROW_COUNT[`${age}`]) {
      setDamagochi({ ...damamgochi, isGrow: true });
      growDamagochi();
    }
  }, [diaryCounting, age]);

  return (
    <Container>
      <ProgressBar />
      <Damagochi />
    </Container>
  );
};

export default IndexPage;
