import * as S from './DamagochiGreeting.style';

import commonIcon from '@/assets/commonIcon';
import emotionIcon from '@/assets/emotionIcon';
import { ReactComponent as SpeechBubbleFrame } from '@/assets/SpeechBubble.svg';

const DamagochiGreeting = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <S.GoBack>
        <button onClick={handleGoBack}>{commonIcon.arrowLeft}</button>
      </S.GoBack>
      <S.Container>
        <S.Paragraph>{`${year}년 ${month}월 ${day}일`}</S.Paragraph>
        <S.SpeechBubble>
          <SpeechBubbleFrame width={300} height={150} />
          <p>오늘은 누구를 만났어?</p>
        </S.SpeechBubble>
        <S.DamagochiContainer>{emotionIcon.happyActive}</S.DamagochiContainer>
      </S.Container>
    </>
  );
};

export default DamagochiGreeting;
