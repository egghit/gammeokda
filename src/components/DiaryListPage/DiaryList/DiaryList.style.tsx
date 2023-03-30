import styled from 'styled-components';

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
