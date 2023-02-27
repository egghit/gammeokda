import { FormEventHandler, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './DiaryForm.style';

import type { Emotion } from '@/@types/types';
import Button from '@/components/common/Button';
import EmotionIcon from '@/components/DiaryWritePage/EmotionIcon';

const DiaryForm = () => {
  const emotions: Emotion[] = ['행복', '기쁨', '쏘쏘', '슬픔', '화남'];
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion>('쏘쏘');

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
    console.log(body);
    navigate(-1);
  };

  return (
    <S.Form onSubmit={onPost}>
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

export default DiaryForm;
