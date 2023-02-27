import styled from 'styled-components';

export const CalendarContainer = styled.div`
  margin-bottom: 1rem;

  .react-calendar {
    width: 100%;
    background-color: transparent;
    border: none;
  }

  .react-calendar__tile {
    :hover {
      background-color: transparent;
    }
    height: 70px;
  }

  .react-calendar__navigation {
    width: max-content;
    margin: 0 auto;
  }

  .react-calendar__navigation__label {
    width: 200px;
    color: ${({ theme }) => theme.color.primaryDark};
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

  .react-calendar__tile {
    > abbr {
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      width: 20px;
      height: 20px;
    }
  }

  .react-calendar__tile--active {
    background-color: transparent !important;

    > abbr {
      color: white !important;
      background-color: ${({ theme }) => theme.color.primaryDark};
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    color: ${({ theme }) => theme.color.primaryDark};
    > abbr {
      font-family: 'DNFBitBitTTF';
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day {
    width: 2.5rem;

    > abbr {
      color: ${({ theme }) => theme.color.primaryDark};
    }
  }

  .react-calendar__month-view__days__day--weekend {
    > abbr {
      color: #d10000;
    }
  }

  .react-calendar__navigation__label {
    width: max-content;
  }

  .react-calendar__navigation__label__labelText {
    font-size: 32px;
  }

  .react-calendar__navigation {
    margin-bottom: 48px;
  }
`;
