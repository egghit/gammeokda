import { useRef } from 'react';
import styled from 'styled-components';

interface CalendarTileModalProps {
  emotion: any;
}

const CalendarTileModal = ({ emotion }: CalendarTileModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return <CalendarTileModalContainer ref={wrapperRef}>{emotion}</CalendarTileModalContainer>;
};

const CalendarTileModalContainer = styled.div`
  position: absolute;
  width: 205px;
  height: 40px;
  left: -150px;
  bottom: 62px;
  background: #484848;
  color: white;
  border-radius: 5px;
  padding: 12px 12.8px;

  ::after {
    border-top: 10px solid #484848;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 40px;
    left: 160px;
  }
`;

export default CalendarTileModal;
