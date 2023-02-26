import styled from 'styled-components';

export const Layout = styled.div`
  padding: 0px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
`;

export const CharName = styled.div`
  position: absolute;
  top: 75px;
  left: 32%;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 22px;
  }
`;

export const Character = styled.div`
  position: absolute;
  background-color: black;
  display: flex;
  width: 45%;
  height: 40%;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 120px;
`;

const ButtonPos = styled.button`
  position: absolute;
  bottom: 80px;
  width: 30px;
  font-size: 16px;
`;

export const LeftButton = styled(ButtonPos)`
  left: 29%;
  bottom: 100px;
`;

export const RightButton = styled(ButtonPos)`
  right: 29%;
  bottom: 100px;
`;
export const CenterButton = styled(ButtonPos)`
  left: 46%;
`;
