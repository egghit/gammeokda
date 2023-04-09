import { useState } from 'react';

import commonIcon from '@/assets/commonIcon';
import Modal from '@/components/common/Modal';
import * as S from '@/components/DiaryListPage/Header/Header.style';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
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
    </>
  );
};

export default Header;
