import { FormEventHandler, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from './DiaryForm.style';

import type { Emotion } from '@/@types/types';
import { ReactComponent as SpeechBubbleFrame } from '@/assets/SpeechBubble.svg';
import Button from '@/components/common/Button';
import EmotionIcon from '@/components/DiaryWritePage/EmotionIcon';
import { damagochiState } from '@/store/damagochiState';

const DiaryForm = () => {
  const emotions: Emotion[] = ['happy', 'delight', 'default', 'sad', 'angry'];
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion>('default');
  const [damagochi, setDamagochi] = useRecoilState(damagochiState);

  const navigate = useNavigate();

  const onPost: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    if (!target) return;

    const data = new FormData(target);
    const body = {
      date: new Date(),
      emotion: data.get('emotion'),
      text: data.get('text'),
    };

    // post 요청
    setDamagochi({ ...damagochi, diaryCounting: damagochi.diaryCounting + 1 });

    navigate('/', { state: { state: selectedEmotion } });
  };

  return (
    <S.Form onSubmit={onPost}>
      <S.Paragraph>{formatDate(new Date())}</S.Paragraph>
      <S.SpeechBubble>
        <SpeechBubbleFrame width={300} height={150} />
        <p>오늘은 누구를 만났어?</p>
      </S.SpeechBubble>
      <S.DamagochiContainer>
        <EmotionIcon category={selectedEmotion} selected={true} />
      </S.DamagochiContainer>
      <S.Container>
        <p>오늘의 감정은 어때?</p>
        <S.FlexRow>
          {emotions.map((emotion) => (
            <Fragment key={emotion}>
              <S.HiddenInput name="emotion" type="radio" id={emotion} value={emotion} />
              <S.Label htmlFor={emotion} onClick={() => setSelectedEmotion(emotion)}>
                <EmotionIcon category={emotion} selected={emotion === selectedEmotion} />
              </S.Label>
            </Fragment>
          ))}
        </S.FlexRow>
      </S.Container>
      <S.Container>
        <p>무슨 일이 있었어? </p>
        <textarea name="text" />
      </S.Container>
      <Button>감정 주기</Button>
    </S.Form>
  );
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export default DiaryForm;
