import { useRef } from 'react';

import * as S from './CalendarTileModal.style';

interface CalendarTileModalProps {
  emotion: any;
}

const CalendarTileModal = ({ emotion }: CalendarTileModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return <S.CalendarTileModalContainer ref={wrapperRef}>{emotion}</S.CalendarTileModalContainer>;
};

export default CalendarTileModal;
