import { useEffect, useState } from 'react';

import * as Style from './progressBar.styles';

import Progress from '@/assets/progressBar';
import { DamagochiAgeTypes } from '@/pages/IndexPage';

interface ProgressBarProps {
  age: DamagochiAgeTypes;
  diaryCounting: number;
}

const GROW_COUNT = {
  egg: 3,
  baby: 30,
  adult: 0,
};

const ProgressBar = ({ age, diaryCounting }: ProgressBarProps) => {
  const [percent, setPercent] = useState(0);

  const rest = GROW_COUNT[`${age}`] - diaryCounting > 0 ? GROW_COUNT[`${age}`] - diaryCounting : 0;

  const accGrowthPercent = () => {
    const gauagePercent = Math.floor(((diaryCounting / GROW_COUNT[`${age}`]) * 100) / 10) * 10;
    setPercent(gauagePercent > 100 ? 100 : gauagePercent);
  };

  useEffect(() => {
    accGrowthPercent();
  }, [diaryCounting]);

  return (
    <Style.Container>
      <Style.ProgressWrapper>{Progress.container}</Style.ProgressWrapper>
      <Style.GaugeWrapper>
        <div>
          당신의 감정 {rest}개가 <br />더 궁금해요!
        </div>
        {Progress.bar[`${percent}`]}
      </Style.GaugeWrapper>
    </Style.Container>
  );
};

export default ProgressBar;
