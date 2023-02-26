import * as Style from './damagochi.styels';

import DamagochiTheme from '@/assets/DamagochiCase';

const Damagochi = () => {
  return (
    <Style.Layout>
      <Style.Container>
        {DamagochiTheme.default}
        <Style.CharName>
          <h1>곶감이</h1>
        </Style.CharName>
        <Style.Character>여기 다마고치</Style.Character>
        <Style.LeftButton>쓰다듬기</Style.LeftButton>
        <Style.CenterButton>감정주기</Style.CenterButton>
        <Style.RightButton>테마변경</Style.RightButton>
      </Style.Container>
    </Style.Layout>
  );
};

export default Damagochi;
