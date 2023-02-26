import { Link } from 'react-router-dom';

import { dateformat } from '@/utils/date';

const Diary = ({ value, diaryList }: any) => {
  const diaryDate = dateformat(value);
  const diaryListFiltered = diaryList.filter((diary: any) => diary.date === diaryDate);

  if (diaryListFiltered.length === 0) {
    return (
      <div
        style={{
          border: '4px solid #6F272F',
          borderRadius: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '38px 0',
        }}
      >
        <img src="/sad.svg" width={200} height={145} />
        <span style={{ fontSize: 32, color: '#6F272F', margin: '12px 0' }}>
          작성된 일기가 없어요...
        </span>
        <Link to="/diaries">
          <button
            style={{
              fontSize: 24,
              backgroundColor: '#6F272F',
              color: 'white',
              padding: '10px 20px',
              borderRadius: 14,
            }}
          >
            작성하러 가기
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div>{diaryDate}</div>
      {diaryList
        .filter((diary: any) => diary.date === diaryDate)
        .map((item: any) => (
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
    </>
  );
};

export default Diary;
