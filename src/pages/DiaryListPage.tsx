import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { DiaryContent } from '@/@types/types';
import commonIcon from '@/assets/commonIcon';
import Diary from '@/components/DiaryListPage/Diary';
import * as S from '@/components/DiaryListPage/DiaryListPage.style';
import { db } from '@/firebase';

const List = () => {
  const [itemList, setItemList] = useState<DiaryContent[]>([]);

  const getDiaryTestData: () => Promise<void> = async () => {
    try {
      const query = await getDocs(collection(db, 'diary'));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any[] = [];
      query.forEach((document) => {
        return data.push(document.data());
      });

      setItemList(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    getDiaryTestData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Container>
      <S.DiaryListHeader>
        <S.MonthWrapper>
          {commonIcon.arrowLeft}
          <S.DateText>2023년 3월</S.DateText>
          {commonIcon.arrowRight}
        </S.MonthWrapper>
        <S.SortButtonWrapper>{commonIcon.arrowSort}</S.SortButtonWrapper>
      </S.DiaryListHeader>
      <>
        {itemList.length > 0 ? (
          itemList?.map((contents: DiaryContent) => <Diary key={contents.id} contents={contents} />)
        ) : (
          <p>일기가 없어요</p>
        )}
      </>
      <S.UpButtonWrapper>
        <S.ScrollToTopButton onClick={scrollToTop}>맨 위로 ▲</S.ScrollToTopButton>
      </S.UpButtonWrapper>
    </S.Container>
  );
};

export default List;
