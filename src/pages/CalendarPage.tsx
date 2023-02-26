import { useState, useEffect } from 'react';

import CalendarDiaryList from '@/components/CalendarPage/CalendarDiaryList';
import * as S from '@/components/CalendarPage/CalendarPage.style';
import CalendarWrapper from '@/components/CalendarPage/CalendarWrapper';

const CalendarPage = () => {
  const [value, setValue] = useState<Date>(new Date());
  const [diaryList, setDiaryList] = useState<any>([]);

  useEffect(() => {
    setDiaryList([
      {
        id: 1,
        date: '2023-02-24',
        text: '국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다. 신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 모든 국민은 근로의 권리를 가진다.  ',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '행복',
      },
      {
        id: 2,
        date: '2023-02-24',
        text: '',
        photo: '',
        emotion: '슬픔',
      },
      {
        id: 3,
        date: '2023-02-25',
        text: '편견에 갇힌 여자가 저를 가둔 가타부타를 깨다 못해 박살내는 이야기. 그리고 그 혁명에 불을 지핀 기적같은 한 남자 이야기분명 뜨끈한 사랑 얘긴데, 맨날 사랑만 하진 않는 애기.진짜 사람들의 진짜 이야기여기 편견에 갇힌 한 여자가 있습니다. 아무도 그녀의 행복을 예상하지 못했죠. 우리 속 무심하고도 사소한 시선들이 그녀를 쉽게 재단하지만, 우리속 무심하고도 사소한 배려들이 그녀의 세상을 바꿀수도 있습니다. 편견에 갇힌 한 사람이 조금씩 틀을 깨고 나와 포효하기까지, 그 사소하지만 위대한 기적을 만들어 낸건 평범한 듯 안평범한 난 놈, 용식이였습니다. 만에게 무조건 직진으로 마음을 보여주는 촌므파탈의 폭격형 로맨스를 시작하면서 겪게되는 시골살이 생활밀찰형 로맨스적인 드라마입니다.',
        photo:
          'https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2341&q=80',
        emotion: '쏘쏘',
      },
    ]);
  }, []);

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
      <CalendarWrapper setValue={setValue} value={value} diaryList={diaryList} />
      <CalendarDiaryList diaryList={diaryList} value={value} />
    </S.CalendarPageContainer>
  );
};

export default CalendarPage;
