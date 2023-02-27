import styled from 'styled-components';

import DamagochiGreeting from '@/components/DiaryWritePage/DamagochiGreeting';
import DiaryForm from '@/components/DiaryWritePage/DiaryForm';

const DiaryWritePage = () => {
  return (
    <Container>
      <DamagochiGreeting />
      <DiaryForm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default DiaryWritePage;
