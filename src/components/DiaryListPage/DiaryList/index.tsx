import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import * as S from './DiaryList.style';

import { DiaryContent } from '@/@types/types';
import Diary from '@/components/DiaryListPage/Diary';
import { db } from '@/firebase';

const DiaryList = () => {
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

  if (!itemList.length) return <p>일기가 없어요</p>;

  return (
    <>
      {itemList.map((contents: DiaryContent) => (
        <Diary key={contents.id} contents={contents} />
      ))}
      <S.UpButtonWrapper>
        <S.ScrollToTopButton onClick={scrollToTop}>맨 위로 ▲</S.ScrollToTopButton>
      </S.UpButtonWrapper>
    </>
  );
};

export default DiaryList;
