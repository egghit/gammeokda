import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

import * as S from './Button.style';

import { ReactComponent as ButtonFrame } from '@/assets/Button.svg';

export interface ButtonProps {
  children: ReactNode;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <S.Button {...props}>
      <ButtonFrame width={300} height={90} />
      {children}
    </S.Button>
  );
};

export default Button;
