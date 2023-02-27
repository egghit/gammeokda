import { ReactNode } from 'react';

import * as S from './Button.style';

import { ReactComponent as ButtonFrame } from '@/assets/Button.svg';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <S.Button>
      <ButtonFrame width={300} height={90} />
      {children}
    </S.Button>
  );
};

export default Button;
