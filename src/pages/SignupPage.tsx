import styled from 'styled-components';

import NamingForm from '@/components/SignupPage/NamingForm';

const SignupPage = () => {
  return (
    <Container>
      <NamingForm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20% 0%;
`;

export default SignupPage;
