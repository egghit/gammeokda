import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { DiaryContent } from '@/@types/types';
import commonIcon from '@/assets/commonIcon';
import Container from '@/components/common/Container';
import Modal from '@/components/common/Modal';
import Diary from '@/components/DiaryListPage/Diary';
import * as S from '@/components/DiaryListPage/DiaryListPage.style';
import { db } from '@/firebase';

const List = () => {
  const [itemList, setItemList] = useState<DiaryContent[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  const showModal = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      {modalOpen && <Modal onClose={onClose} />}
      <S.DiaryListHeader>
        <S.MonthWrapper>
          <button onClick={showModal}>{commonIcon.arrowLeft}</button>
          <S.DateText>
            {new Intl.DateTimeFormat('ko', {
              year: 'numeric',
              month: 'long',
            }).format(new Date())}
          </S.DateText>
          <button onClick={showModal}>{commonIcon.arrowRight}</button>
        </S.MonthWrapper>
        <S.SortButtonWrapper>
          <button onClick={showModal}>{commonIcon.arrowSort}</button>
        </S.SortButtonWrapper>
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
    </Container>
  );
};

export default List;
