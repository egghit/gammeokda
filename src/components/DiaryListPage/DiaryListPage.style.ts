import styled from 'styled-components';

export const DateText = styled.h2`
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.primaryDark};
`;

export const DiaryListHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const MonthWrapper = styled.div`
  flex: 9;
  display: flex;
  margin-left: 2rem;
  justify-content: center;
  align-items: center;

  svg {
    width: 10px;
  }
`;

export const SortButtonWrapper = styled.div`
  flex: 1;

  svg {
    width: 24px;
  }
`;

export const ChangeMonthButton = styled.button`
  margin-left: 8px;
`;

export const UpButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ScrollToTopButton = styled.button`
  min-height: 1.25rem;
  padding: 0.4rem 1rem;
  border-radius: 28px;
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primaryDark};
`;
