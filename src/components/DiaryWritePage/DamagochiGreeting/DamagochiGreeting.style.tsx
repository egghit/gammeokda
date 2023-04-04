import styled from 'styled-components';

export const GoBack = styled.div`
  color: ${({ theme }) => theme.color.primaryDark};
  transform: translateX(-30%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
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
  width: 300px;
  height: 150px;

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
    width: 200px;
    height: 170px;
  }
`;
