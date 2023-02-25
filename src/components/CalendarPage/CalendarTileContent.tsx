import styled from 'styled-components';

import CalendarTileModal from '@/components/CalendarPage/CalendarTileModal';

interface CalendarTileContentProps {
  emotion: any;
  showModal: any;
  setShowModal: any;
  isModal: any;
}

const CalendarTileContent = ({
  isModal,
  emotion,
  setShowModal,
  showModal,
}: CalendarTileContentProps) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      {isModal && <CalendarTileModal emotion={emotion} />}
      <div
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        {emotion}
      </div>
    </div>
  );
};

export default CalendarTileContent;
