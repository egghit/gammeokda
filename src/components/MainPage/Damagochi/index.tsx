import { Dispatch, SetStateAction, useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as Style from './damagochi.styels';
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
    <Style.Layout>
      <Style.Container>
        {DamagochiTheme[caseTheme]}
        <Style.CharName>
          <h1>{name}</h1>
        </Style.CharName>
        <Style.Character>{damagochiAnimation}</Style.Character>
        <Style.LeftButton onClick={() => handelAnimation('stroke')}>쓰다듬기</Style.LeftButton>
        <Style.CenterButton onClick={() => navigate('/diarywrite')}>감정주기</Style.CenterButton>
        <Style.RightButton onClick={handleTheme}>테마변경</Style.RightButton>
      </Style.Container>
    </Style.Layout>
  );
};

export default Damagochi;
