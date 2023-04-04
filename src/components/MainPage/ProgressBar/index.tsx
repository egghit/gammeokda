import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import * as S from './ProgressBar.styles';

import Progress from '@/assets/progressBar';
import { damagochiState } from '@/store/damagochiState';

export const GROW_COUNT = {
  egg: 3,
  baby: 30,
  adult: 0,
};

const ProgressBar = () => {
  const [percent, setPercent] = useState(0);
  const [damagochi, setDamagochi] = useRecoilState(damagochiState);
  const { age, diaryCounting } = damagochi;

  const growthRest =
    GROW_COUNT[`${age}`] - diaryCounting > 0 ? GROW_COUNT[`${age}`] - diaryCounting : 0;

  const accGrowthPercent = () => {
    const gauagePercent = Math.floor(((diaryCounting / GROW_COUNT[`${age}`]) * 100) / 10) * 10;
    setPercent(gauagePercent > 100 ? 100 : gauagePercent);
  };

  useEffect(() => {
    accGrowthPercent();
  }, [diaryCounting]);

  const GaugeBar = Progress.Bar[percent];

  return (
    <S.Container>
      <S.ProgressWrapper>
        <Progress.Container />
        <S.GaugeWrapper>
          <div>
            당신의 감정 {growthRest}개가 <br />더 궁금해요!
          </div>
          <GaugeBar />;
        </S.GaugeWrapper>
      </S.ProgressWrapper>
    </S.Container>
  );
};

export default ProgressBar;
