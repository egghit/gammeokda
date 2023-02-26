import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 90px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-size: large;

  svg {
    position: absolute;
    z-index: -1;
  }
`;
