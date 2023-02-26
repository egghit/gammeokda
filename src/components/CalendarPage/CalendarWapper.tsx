import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

import * as S from './CalendarWapper.style';

import CalendarTileContent from '@/components/CalendarPage/CalendarTileContent';
import { dateformat } from '@/utils/date';
import 'react-calendar/dist/Calendar.css'; // css import

const CalendarWapper = ({ setValue, value, diaryList }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const diaryDate = dateformat(value);
  const time = value.getTime();

  useEffect(() => {
    setShowModal(false);
  }, [time]);

  return (
    <S.CalendarContainer>
      <Calendar
        onChange={setValue}
        next2Label={null}
        prev2Label={null}
        prevLabel={<img src="/left_arrow.svg" width={20} height={20} />}
        nextLabel={<img src="/right_arrow.svg" width={20} height={20} />}
        value={value}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format('D')} // '일' 표시 x
        tileContent={({ date }) => {
          const dateFormated = dateformat(date);
          const listFinded = diaryList.find((diary: any) => diary.date === dateFormated);

          if (listFinded) {
            return (
              <CalendarTileContent
                isModal={dateFormated === diaryDate && showModal}
                emotion={listFinded.contents.emotion}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            );
          } else {
            return (
              <div
                style={{
                  height: 50,
                }}
              />
            );
          }
        }}
      />
    </S.CalendarContainer>
  );
};

export default CalendarWapper;
