import styled from 'styled-components';

import { ReactComponent as Damagochi } from '@/assets/damagochi.svg';
import logo from '@/assets/logo.png';
import SigninButton from '@/components/SigninPage/SigninButton';

const SigninPage = () => {
  return (
    <Container>
      <Image width={300} src={logo} alt="로고 - 감정을 먹는 다마고치" />
      <Damagochi width={300} height={500} />
      <SigninButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% 0%;

  img {
    aspect-ratio: auto;
  }
`;

const Image = styled.img``;

export default SigninPage;
