import Diary from '@/components/DiaryListPage/Diary';
import * as S from '@/components/DiaryListPage/DiaryListPage.style';

const List = () => {
  return (
    <S.Container>
      <S.DiaryListHeader>
        <div>
          <S.ChangeMonthButton>이전 달</S.ChangeMonthButton>
          2022년 3월
          <S.ChangeMonthButton>다음 달</S.ChangeMonthButton>
        </div>
        <S.SortButton>필터링</S.SortButton>
      </S.DiaryListHeader>
      <Diary />
      <S.ScrollToTopButton>맨위로</S.ScrollToTopButton>
    </S.Container>
  );
};

export default List;
