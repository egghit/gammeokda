import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: x-large;
`;

export const SpeechBubble = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 18.75rem;
  height: 9.375rem;

  p {
    font-size: x-large;
    color: ${({ theme }) => theme.color.primaryDark};
  }

  svg {
    position: absolute;
    z-index: -1;
    transform: translateY(10px);
  }
`;

export const DamagochiContainer = styled.div`
  transform: translateY(-25px);

  svg {
    width: 12.5rem;
    height: 10.625rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.625rem;
  margin-bottom: 0.625rem;
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
    height: 10rem;
    color: ${({ theme }) => theme.color.black};
    border: 2px solid ${({ theme }) => theme.color.primaryDark};
    resize: none;
    font-size: medium;

    &:focus {
      outline: none;
    }
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  svg {
    width: 3.125rem;
    height: 3.125rem;
  }
`;
