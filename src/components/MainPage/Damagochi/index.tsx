import React, { FC, useReducer } from 'react';

import * as Style from './damagochi.styels';

/*
{
  다마고치 이름 : 
  진화상태 : 알 | 베이비 | ,
  요일 별 다이어리 총 개수 : 3,
}
{
  감정 표현은 쓰기 페이지에서 query로 라우트하는 건 어떨까요?
}
//   
*/

import { DamagochiAnimation } from '@/assets/damagochi';
import DamagochiTheme, { CaseTheme } from '@/assets/damagochiCase';

type CaseState = CaseTheme;
type CaseAction = 'click';

const caseInitialState: CaseState = (localStorage.getItem('caseTheme') as CaseTheme) ?? 'pink';

const caseReducer: React.Reducer<CaseState, CaseAction> = (state) => {
  switch (state) {
    case 'pink':
      localStorage.setItem('caseTheme', 'orange');
      return 'orange';
    case 'orange':
      localStorage.setItem('caseTheme', 'purple');
      return 'purple';
    case 'purple':
      localStorage.setItem('caseTheme', 'pink');
      return 'pink';
  }
};

type DamagochiState = {
  animation: 'stroke' | 'angry' | 'sad' | 'fun' | 'happy' | 'growth' | 'default';
};
type DamagochiAction = 'stroke' | 'angry' | 'sad' | 'fun' | 'happy' | 'growth' | 'default';
const damagochiInitailState: DamagochiState = {
  animation: 'default',
};
const damagochiReducer: React.Reducer<DamagochiState, DamagochiAction> = (state, action) => {
  switch (action) {
    case 'angry':
      return { ...state, animation: 'angry' };
    case 'fun':
      return { ...state, animation: 'fun' };
    case 'growth':
      return { ...state, animation: 'growth' };
    case 'happy':
      return { ...state, animation: 'happy' };
    case 'sad':
      return { ...state, animation: 'sad' };
    case 'stroke':
      return { ...state, animation: 'stroke' };
    default:
      return { ...state, animation: 'default' };
  }
};

interface DamagochiProps {
  state: 'egg' | 'baby' | 'adult';
}

const Damagochi: FC<DamagochiProps> = ({ state = 'adult' }) => {
  const [caseTheme, caseDispatch] = useReducer(caseReducer, caseInitialState);
  const [damagochiState, damagochiDispatch] = useReducer(damagochiReducer, damagochiInitailState);

  const damagochiAnimation = DamagochiAnimation[`${state}`][`${damagochiState.animation}`];

  const handleTheme = () => {
    caseDispatch('click');
  };

  const handelAnimation = (action: DamagochiAction) => {
    damagochiDispatch(action);
    setTimeout(() => {
      damagochiDispatch('default');
    }, 4000);
  };

  return (
    <Style.Layout>
      <Style.Container>
        {DamagochiTheme[caseTheme]}
        <Style.CharName>
          <h1>곶감이</h1>
        </Style.CharName>
        <Style.Character>{damagochiAnimation}</Style.Character>
        <Style.LeftButton onClick={() => handelAnimation('stroke')}>쓰다듬기</Style.LeftButton>
        <Style.CenterButton>감정주기</Style.CenterButton>
        <Style.RightButton onClick={handleTheme}>테마변경</Style.RightButton>
      </Style.Container>
      {/* {DamagochiState.adult}
       */}
    </Style.Layout>
  );
};

export default Damagochi;
