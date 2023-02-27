import { useState } from 'react';

import * as S from './Diary.style';

import { DiaryContent } from '@/@types/types';
import commonIcon from '@/assets/commonIcon';
import AngryActive from '@/assets/emotionIcon/angry_active.svg';
import DelightActive from '@/assets/emotionIcon/delight_active.svg';
import HappyActive from '@/assets/emotionIcon/happy_active.svg';
import SadActive from '@/assets/emotionIcon/sad_active.svg';
import SosoActive from '@/assets/emotionIcon/soso_active.svg';
import Modal from '@/components/common/Modal';

interface Props {
  contents: DiaryContent;
}

type EmotionMapingType = {
  [key: string]: string;
};

const Diary = (props: Props) => {
  const { id, date, photo, text, emotion } = props.contents;

  const [hasMoreContents, setHasMoreContents] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  const EMOTION_ICONS: EmotionMapingType = {
    화남: AngryActive,
    기쁨: DelightActive,
    행복: HappyActive,
    슬픔: SadActive,
    쏘쏘: SosoActive,
  };

  return (
    <S.ItemWrapper>
      {modalOpen && <Modal onClose={onClose} />}
      <S.EditButtonWrapper>
        <S.ActionButton onClick={showModal}>{commonIcon.editPencil}</S.ActionButton>
        <S.ActionButton onClick={showModal}>{commonIcon.deleteTrash}</S.ActionButton>
      </S.EditButtonWrapper>
      <S.DiaryContentWarpper>
        <S.Info key={id}>
          <S.DateWrapper>
            {emotion && <img src={EMOTION_ICONS[emotion]} alt="감정" />}
            <S.DiaryDate>
              {' '}
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
