import { useReducer } from 'react';

import * as Style from './damagochi.styels';

import DamagochiTheme, { CaseTheme } from '@/assets/DamagochiCase';

type State = CaseTheme;
type Action = 'click';

const initialState = (localStorage.getItem('caseTheme') as CaseTheme) ?? 'pink';

const reducer: React.Reducer<State, Action> = (state) => {
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

const Damagochi = () => {
  const [caseTheme, dispatch] = useReducer(reducer, initialState);

  const handleTheme = () => {
    dispatch('click');
  };

  return (
    <Style.Layout>
      <Style.Container>
        {DamagochiTheme[caseTheme]}
        <Style.CharName>
          <h1>곶감이</h1>
        </Style.CharName>
        <Style.Character>여기 다마고치</Style.Character>
        <Style.LeftButton>쓰다듬기</Style.LeftButton>
        <Style.CenterButton>감정주기</Style.CenterButton>
        <Style.RightButton onClick={handleTheme}>테마변경</Style.RightButton>
      </Style.Container>
    </Style.Layout>
  );
};

export default Damagochi;
