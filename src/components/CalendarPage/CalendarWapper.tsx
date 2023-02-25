import { useState } from 'react';
import Calendar from 'react-calendar';

import CalendarTileContent from '@/components/CalendarPage/CalendarTileContent';
import { dateformat } from '@/utils/date';
import 'react-calendar/dist/Calendar.css'; // css import

const CalendarWapper = () => {
  const [value, onChange] = useState<Date>(new Date());

  const diaryDate = dateformat(value);

  const diaryList = [
    {
      id: 1,
      date: '2023-02-24',
      contents: {
        text: '즐거웠다',
        photo:
          'https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82',
        emotion: '',
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
  ];

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date }) => {
          const date2 = dateformat(date);
          const listFinded = diaryList.find((diary) => diary.date === date2);

          if (listFinded) {
            return <CalendarTileContent listFinded={listFinded} />;
          } else {
            return <div />;
          }
        }}
      />
      <div className="text-gray-500 mt-4">{diaryDate}</div>
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
    </div>
  );
};

export default CalendarWapper;
