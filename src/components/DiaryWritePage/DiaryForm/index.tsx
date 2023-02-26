import { useState } from 'react';
import styled from 'styled-components';

import type { Emotion } from '@/@types/types';
import Button from '@/components/common/Button';
import EmotionIcon from '@/components/DiaryWritePage/EmotionIcon';

const DiaryForm = () => {
  const emotions: Emotion[] = ['행복', '기쁨', '쏘쏘', '슬픔', '화남'];
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | undefined>(undefined);

  const handleEmotionClick = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
  };

  return (
    <Form>
      <Container>
        <p>오늘의 감정은 어때?</p>
        <FlexRow>
          {emotions.map((emotion, index) => (
            <button key={index} onClick={() => handleEmotionClick(emotion)}>
              {emotion}
              {
                // <EmotionIcon category={emotion} selected={true} />
              }
            </button>
          ))}
        </FlexRow>
      </Container>
      <Container>
        <p>무슨 일이 있었어? </p>
        <textarea />
      </Container>

      <Button>감정 주기</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.primary};
  border: 6px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 15px;
  box-shadow: 5px 7px 0px 0px ${({ theme }) => theme.color.primaryDark};

  p {
    padding: 5px 0px 10px 0px;
    color: ${({ theme }) => theme.color.white};
    font-size: large;
  }

  textarea {
    width: 100%;
    height: 100px;
    color: ${({ theme }) => theme.color.black};
    border: 2px solid ${({ theme }) => theme.color.primaryDark};
    resize: none;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default DiaryForm;
