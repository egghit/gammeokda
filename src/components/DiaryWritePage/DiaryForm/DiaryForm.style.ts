import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.primary};
  border: 6px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 15px;
  box-shadow: 5px 7px 0px 0px ${({ theme }) => theme.color.primaryDark};

  p {
    padding: 5px 0px 10px 0px;
    color: ${({ theme }) => theme.color.white};
    font-size: large;
  }

  textarea {
    width: 100%;
    height: 100px;
    color: ${({ theme }) => theme.color.black};
    border: 2px solid ${({ theme }) => theme.color.primaryDark};
    resize: none;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
