import { Dispatch, SetStateAction, useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './damagochi.styels';
import {
  caseInitialState,
  caseReducer,
  damagochiInitailState,
  damagochiReducer,
  DamagochiAction,
} from './damagochiReducer';

import { DamagochiAnimation } from '@/assets/damagochi';
import DamagochiTheme from '@/assets/damagochiCase';

interface DamagochiProps {
  name: string;
  age: 'egg' | 'baby' | 'adult';
  isGrow: boolean;
  setIsGrow: Dispatch<SetStateAction<boolean>>;
}

const Damagochi = ({ name, age, isGrow, setIsGrow }: DamagochiProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [caseTheme, caseDispatch] = useReducer(caseReducer, caseInitialState);
  const [damagochiState, damagochiDispatch] = useReducer(damagochiReducer, damagochiInitailState);

  const damagochiAnimation = DamagochiAnimation[`${age}`][`${damagochiState.animation}`];
  // const damagochiAnimation = DamagochiAnimation.egg.default;

  const handleTheme = () => {
    caseDispatch('click');
  };

  const handelAnimation = (action: DamagochiAction) => {
    damagochiDispatch(action);
    setTimeout(
      () => {
        damagochiDispatch('default');
      },
      action === 'growth' ? 1000 : 4000,
    );
  };

  useEffect(() => {
    if (isGrow) {
      setIsGrow(false);
      return handelAnimation('growth');
    }
    if (state) {
      handelAnimation(state);
    }
  }, [state, isGrow]);

  return (
    <S.Container>
      {DamagochiTheme[caseTheme]}
      <S.CharName>
        <h1>{name}</h1>
      </S.CharName>
      <S.Character>{damagochiAnimation}</S.Character>
      <S.LeftButton onClick={handleTheme}>테마변경</S.LeftButton>
      <S.CenterButton onClick={() => navigate('/write')}>감정주기</S.CenterButton>
      <S.RightButton onClick={() => handelAnimation('stroke')}>쓰다듬기</S.RightButton>
    </S.Container>
  );
};

export default Damagochi;
