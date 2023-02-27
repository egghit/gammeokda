import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 90px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ fontSize }) => fontSize ?? 'large'};

  svg {
    position: absolute;
    z-index: -1;
  }
`;
