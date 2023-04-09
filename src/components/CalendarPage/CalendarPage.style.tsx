import styled from 'styled-components';

export const CalendarPageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const CalendarTabList = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const CalendarTab = styled.div`
  color: ${({ theme }) => theme.color.primaryDark};
  padding: 0.25rem 1.25rem;
  border-bottom: 0.25rem solid ${({ theme }) => theme.color.primaryDark};
  cursor: pointer;
`;

export const StatisticsTab = styled.div`
  color: ${({ theme }) => theme.color.primaryDimmed};
  padding: 0.25rem 1.25rem;
  border-bottom: 0.25rem solid ${({ theme }) => theme.color.primaryDimmed};
  cursor: pointer;
`;
