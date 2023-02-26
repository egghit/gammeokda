import { useState } from 'react';

import * as S from './Diary.style';

import { DiaryContent } from '@/@types/types';
import commonIcon from '@/assets/commonIcon';
import emotionIcon from '@/assets/emotionIcon';

interface Props {
  contents: DiaryContent;
}

const Diary = (props: Props) => {
  const { id, date, photo, text } = props.contents;

  const [isMoreContents, setIsMoreContents] = useState<boolean>(false);

  return (
    <S.ItemWrapper>
      <S.EditButtonWrapper>
        <S.ActionButton>{commonIcon.editPencil}</S.ActionButton>
        <S.ActionButton>{commonIcon.deleteTrash}</S.ActionButton>
      </S.EditButtonWrapper>
      <S.DiaryContentWarpper>
        <S.Info key={id}>
          <S.DateWrapper>
            {emotionIcon.delightActive}
            <S.DiaryDate>2일 금</S.DiaryDate>
          </S.DateWrapper>
          <S.ContentWrapper isMoreContents={!isMoreContents}>
            {text || '작성된 글이 없습니다.'}
            {photo && <img src={photo} alt="photo" />}
          </S.ContentWrapper>
        </S.Info>
        <S.ScrollButton onClick={() => setIsMoreContents(!isMoreContents)}>
          {isMoreContents ? commonIcon.arrowUp : commonIcon.arrowDown}
        </S.ScrollButton>
      </S.DiaryContentWarpper>
    </S.ItemWrapper>
  );
};

export default Diary;
