import { useState } from 'react';
import styled from 'styled-components';

import * as S from './DiaryForm.style';

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
    <S.Form>
      <S.Container>
        <p>오늘의 감정은 어때?</p>
        <S.FlexRow>
          {emotions.map((emotion, index) => (
            <S.Button type={'button'} key={index} onClick={() => handleEmotionClick(emotion)}>
              <EmotionIcon category={emotion} selected={true} />
            </S.Button>
          ))}
        </S.FlexRow>
      </S.Container>
      <S.Container>
        <p>무슨 일이 있었어? </p>
        <textarea />
      </S.Container>
      <Button>감정 주기</Button>
    </S.Form>
  );
};

export default DiaryForm;
