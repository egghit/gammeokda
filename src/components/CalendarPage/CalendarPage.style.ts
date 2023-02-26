import styled from 'styled-components';

export const CalendarPageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const CalendarTabList = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-top: 50px;
  justify-content: center;
`;

export const CalendarTab = styled.div`
  color: ${({ theme }) => theme.color.primaryDark};
  padding: 5px 20px;
  border-bottom: 4px solid ${({ theme }) => theme.color.primaryDark};
  cursor: pointer;
`;

export const StatisticsTab = styled.div`
  color: ${({ theme }) => theme.color.primaryDimmed};
  padding: 5px 20px;
  border-bottom: 4px solid ${({ theme }) => theme.color.primaryDimmed};
  cursor: pointer;
`;
