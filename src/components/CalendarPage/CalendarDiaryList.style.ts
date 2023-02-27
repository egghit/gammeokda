import styled from 'styled-components';

export const CalendarDiaryListEmpty = styled.div`
  border: 4px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 38px 0;
`;

export const EmptyImageWrapper = styled.div`
  svg {
    width: 200px;
    height: 100%;
  }
`;

export const EmptyText = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.color.primaryDark};
  margin: 12px 0;
`;

export const WritePageButton = styled.button`
  font-size: 24px;
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: white;
  padding: 10px 20px;
  border-radius: 14px;
`;
