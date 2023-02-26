import React from 'react';

import * as Style from './progressBar.styles';

import Progress from '@/assets/ProgressBar';
const user = {
  growing: 3,
};

const ProgressBar = () => {
  const count = 10;

  return (
    <Style.Container>
      <Style.ProgressWrapper>{Progress.container}</Style.ProgressWrapper>
      <Style.GaugeWrapper>
        <div>
          당신의 감정 {user.growing}개가 <br />더 궁금해요!
        </div>
        {Progress[`bar_${count}`]}
      </Style.GaugeWrapper>
    </Style.Container>
  );
};

export default ProgressBar;
