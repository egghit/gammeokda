import { Link } from 'react-router-dom';

import * as S from './CalendarDiaryList.style';

import emotion from '@/assets/emotionIcon';
import Diary from '@/components/DiaryListPage/Diary';
import { dateformat, timestampToTime } from '@/utils/date';

const CalendarDiaryList = ({ diaryList, value }: any) => {
  const diaryDate = dateformat(value);

  const diaryListFiltered = diaryList.filter((diary: any) => {
    const time = timestampToTime(diary.date.seconds);

    const dateFormated = dateformat(time);

    return dateFormated === diaryDate;
  });

  if (diaryListFiltered.length === 0) {
    return (
      <S.CalendarDiaryListEmpty>
        <S.EmptyImageWrapper>{emotion.sadActive}</S.EmptyImageWrapper>
        <S.EmptyText>작성된 일기가 없어요...</S.EmptyText>
        <Link to="/diarywrite">
          <S.WritePageButton>작성하러 가기</S.WritePageButton>
        </Link>
      </S.CalendarDiaryListEmpty>
    );
  }

  return (
    <div>
      {diaryListFiltered.map((contents: any) => (
        <Diary key={contents.id} contents={contents} />
      ))}
    </div>
  );
};

export default CalendarDiaryList;
