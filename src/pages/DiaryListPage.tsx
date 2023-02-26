import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';

import commonIcon from '@/assets/commonIcon';
import Modal from '@/components/common/Modal';
import Diary from '@/components/DiaryListPage/Diary';
import * as S from '@/components/DiaryListPage/DiaryListPage.style';
import { db } from '@/firebase';
import { useModal } from '@/hooks/useModal';

const itemListState = atom({
  key: 'itemListState',
  default: [],
});
const List = () => {
  const [itemList, setItemList] = useRecoilState<any>(itemListState);
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();

  const getDiaryListData: () => Promise<void> = async () => {
    try {
      const query = await getDocs(collection(db, 'diary'));
      const data = [];
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
    getDiaryListData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Container>
      {itemModalOpen && <Modal setModalOpen={setItemModalOpen} />}
      <S.DiaryListHeader>
        <S.MonthWrapper>
          <button onClick={toggleModal}>{commonIcon.arrowLeft}</button>
          <S.DateText>
            {new Intl.DateTimeFormat('ko', {
              year: 'numeric',
              month: 'long',
            }).format(new Date())}
          </S.DateText>
          <button onClick={toggleModal}>{commonIcon.arrowRight}</button>
        </S.MonthWrapper>
        <S.SortButtonWrapper>
          <button onClick={toggleModal}>{commonIcon.arrowSort}</button>
        </S.SortButtonWrapper>
      </S.DiaryListHeader>
      <>
        {itemList?.length > 0 ? (
          itemList?.map((contents: any) => <Diary key={contents.id} contents={contents} />)
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
