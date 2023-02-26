import { useState } from 'react';

import * as S from './Diary.style';

import { DiaryContent } from '@/@types/types';
import commonIcon from '@/assets/commonIcon';
import emotionIcon from '@/assets/emotionIcon';
import Modal from '@/components/common/Modal';
import { useModal } from '@/hooks/useModal';

interface Props {
  contents: DiaryContent;
}

const Diary = (props: Props) => {
  const { id, date, photo, text } = props.contents;

  const [hasMoreContents, setHasMoreContents] = useState<boolean>(false);
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();

  return (
    <S.ItemWrapper>
      {itemModalOpen && <Modal setModalOpen={setItemModalOpen} />}
      <S.EditButtonWrapper>
        <S.ActionButton onClick={toggleModal}>{commonIcon.editPencil}</S.ActionButton>
        <S.ActionButton onClick={toggleModal}>{commonIcon.deleteTrash}</S.ActionButton>
      </S.EditButtonWrapper>
      <S.DiaryContentWarpper>
        <S.Info key={id}>
          <S.DateWrapper>
            {emotionIcon.delightActive}
            <S.DiaryDate>
              {new Intl.DateTimeFormat('ko', {
                day: 'numeric',
                weekday: 'long',
              })
                .format(new Date(date.seconds * 1000))
                .replace('요일', '')}
            </S.DiaryDate>
          </S.DateWrapper>
          <S.ContentWrapper hasMoreContents={!hasMoreContents}>
            {text || '작성된 글이 없습니다.'}
            {photo && <img src={photo} alt="photo" />}
          </S.ContentWrapper>
        </S.Info>
        <S.ScrollButton onClick={() => setHasMoreContents(!hasMoreContents)}>
          {hasMoreContents ? commonIcon.arrowUp : commonIcon.arrowDown}
        </S.ScrollButton>
      </S.DiaryContentWarpper>
    </S.ItemWrapper>
  );
};

export default Diary;
