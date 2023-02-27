import * as S from './CalendarTileContent.style.ts';

import CalendarTileModal from '@/components/CalendarPage/CalendarTileModal';
import { filterEmotion } from '@/utils/emotion';
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
    <S.CalendarTileContentWrapper>
      {/* {isModal && <CalendarTileModal emotion={emotion} />} */}
      <S.Emotion
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        {filterEmotion(emotion)}
      </S.Emotion>
    </S.CalendarTileContentWrapper>
  );
};

export default CalendarTileContent;
