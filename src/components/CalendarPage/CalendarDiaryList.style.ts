import styled from 'styled-components';

export const CalendarDiaryListEmpty = styled.div`
  width: 90%;
  border: 0.25rem solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  margin-top: 1.5rem;
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
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 1rem;
`;
