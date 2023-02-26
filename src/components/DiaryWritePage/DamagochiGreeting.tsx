import styled from 'styled-components';

import { ReactComponent as SpeechBubbleFrame } from '@/assets/말풍선.svg';

const DamagochiGreeting = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return (
    <div>
      <p>{`${year}년 ${month}월 ${day}일`}</p>
      <SpeechBubble>
        <SpeechBubbleFrame width={300} height={150} />
        <p>오늘은 누구를 만났어?</p>
      </SpeechBubble>
    </div>
  );
};

const SpeechBubble = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;

  svg {
    position: absolute;
    z-index: -1;
  }
`;

export default DamagochiGreeting;
