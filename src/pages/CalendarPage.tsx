import CalendarWapper from '@/components/CalendarPage/CalendarWapper';

const CalendarPage = () => {
  return (
    <div
      style={{
        maxWidth: 350,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: 50,
          marginTop: 50,
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: '#6F272F',
            padding: '5px 20px',
            borderBottom: '2px solid #6F272F',
          }}
        >
          달력
        </div>
        <div
          style={{
            color: '#D4A6AB',
            padding: '5px 20px',
            borderBottom: '2px solid #D4A6AB',
            cursor: 'pointer',
          }}
          onClick={() => {
            alert('준비중입니다.');
          }}
        >
          통계
        </div>
      </div>
      <CalendarWapper />
    </div>
  );
};

export default CalendarPage;
