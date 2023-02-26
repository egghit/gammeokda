import { useState } from 'react';

import Modal from '@/components/common/Modal';
import Diary from '@/components/DiaryListPage/Diary';
import * as S from '@/components/DiaryListPage/DiaryListPage.style';

const List = () => {
  // 모달 사용방법 예시
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <S.Container>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <S.DiaryListHeader>
        <S.ChangeMonthButton onClick={showModal}>이전 달</S.ChangeMonthButton>
        <S.DateText>2023년 3월</S.DateText>
        <S.ChangeMonthButton>다음 달</S.ChangeMonthButton>
        <S.SortButton>필터링</S.SortButton>
      </S.DiaryListHeader>
      <Diary />
      <S.ScrollToTopButton>맨위로</S.ScrollToTopButton>
    </S.Container>
  );
};

export default List;
