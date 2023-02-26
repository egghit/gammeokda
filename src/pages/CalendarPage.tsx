import { useState } from 'react';

import * as S from '@/components/CalendarPage/CalendarPage.style';
import CalendarWapper from '@/components/CalendarPage/CalendarWapper';
import Diary from '@/components/CalendarPage/Diary';

const CalendarPage = () => {
  const [value, setValue] = useState<Date>(new Date());

  const diaryList = [
    {
      id: 1,
      date: '2023-02-24',
      contents: {
        text: '즐거웠다',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '슬픔',
      },
    },
    {
      id: 2,
      date: '2023-02-25',
      contents: {
        text: '',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '슬픔',
      },
    },
    {
      id: 3,
      date: '2023-02-26',
      contents: {
        text: '춤을 췄다.',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '쏘쏘',
      },
    },
    {
      id: 4,
      date: '2023-02-26',
      contents: {
        text: '춤을 췄다.',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '쏘쏘',
      },
    },
  ];

  return (
    <S.CalendarPageContainer>
      <S.CalendarTabList>
        <S.CalendarTab>달력</S.CalendarTab>
        <S.StatisticsTab
          onClick={() => {
            alert('준비중입니다.');
          }}
        >
          통계
        </S.StatisticsTab>
      </S.CalendarTabList>
      <CalendarWapper setValue={setValue} value={value} diaryList={diaryList} />
      <Diary value={value} diaryList={diaryList} />
    </S.CalendarPageContainer>
  );
};

export default CalendarPage;
