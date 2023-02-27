import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 10rem;
  padding-bottom: 0.5rem;
  background: none;
  border: none;
  border-bottom: 0.225rem solid ${({ theme }) => theme.color.primaryDark};
  color: #d99191;
  font-size: 2.5rem;
  text-align: center;

  ::placeholder {
    color: #d99191;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #d99191;
  }
`;

export const Alert = styled.p`
  color: #ac5858;
  font-size: normal;
  text-align: center;
`;
