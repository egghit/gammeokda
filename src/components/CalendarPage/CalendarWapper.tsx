import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

import CalendarTileContent from '@/components/CalendarPage/CalendarTileContent';
import { dateformat } from '@/utils/date';
import 'react-calendar/dist/Calendar.css'; // css import

const CalendarWapper = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, onChange] = useState<Date>(new Date());

  const diaryDate = dateformat(value);
  const time = value.getTime();

  useEffect(() => {
    setShowModal(false);
  }, [time]);

  const diaryList = [
    {
      id: 1,
      date: '2023-02-24',
      contents: {
        text: '즐거웠다',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '슬픔',
      },
    },
    {
      id: 2,
      date: '2023-02-25',
      contents: {
        text: '',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '슬픔',
      },
    },
    {
      id: 3,
      date: '2023-02-26',
      contents: {
        text: '춤을 췄다.',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '쏘쏘',
      },
    },
    {
      id: 4,
      date: '2023-02-26',
      contents: {
        text: '춤을 췄다.',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '쏘쏘',
      },
    },
  ];

  return (
    <CalendarContainer>
      <Calendar
        onChange={onChange}
        next2Label={null}
        prev2Label={null}
        prevLabel={<img src="/left_arrow.svg" width={20} height={20} />}
        nextLabel={<img src="/right_arrow.svg" width={20} height={20} />}
        value={value}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format('D')} // '일' 표시 x
        tileContent={({ date }) => {
          const dateFormated = dateformat(date);
          const listFinded = diaryList.find((diary) => diary.date === dateFormated);

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
            return <div />;
          }
        }}
      />
      <div>{diaryDate}</div>
      {diaryList
        .filter((diary) => diary.date === diaryDate)
        .map((item) => (
          <div key={item.id}>
            <div>{item.contents.text}</div>
            <img
              src={item.contents.photo}
              style={{
                width: 250,
                height: 250,
              }}
            />
          </div>
        ))}
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  .react-calendar {
    background-color: transparent;
  }

  .react-calendar__navigation {
    width: 300px;
    margin: 0 auto;
  }

  .react-calendar__navigation__label {
    width: 200px;
    color: #6f272f;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 24px;
  }

  .react-calendar__month-view__weekdays__weekday {
    color: #6f272f;
    > abbr {
      text-decoration: none;
    }
  }

  .react-calendar__navigation__label__labelText {
    font-size: 32px;
  }
  .react-calendar__navigation {
    margin-bottom: 48px;
  }
`;

export default CalendarWapper;
