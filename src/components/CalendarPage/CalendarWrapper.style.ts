import styled from 'styled-components';

export const CalendarContainer = styled.div`
  .react-calendar {
    width: 100%;
    background-color: transparent;
    border: none;
  }

  .react-calendar__navigation {
    width: 240px;
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
  .react-calendar__tile--now {
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }

  .react-calendar__tile--active {
    background-color: transparent !important;

    > abbr {
      color: white !important;
      background-color: #6f272f;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    color: #6f272f;
    > abbr {
      font-family: 'DNFBitBitTTF';
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day {
    > abbr {
      color: #6f272f;
    }
  }
  .react-calendar__month-view__days__day--weekend {
    > abbr {
      color: #d10000;
    }
  }
  .react-calendar__navigation__label__labelText {
    font-size: 32px;
  }
  .react-calendar__navigation {
    margin-bottom: 48px;
  }
`;
