import styled from 'styled-components';

import DiaryForm from '@/components/DiaryWritePage/DiaryForm';
import GobackButton from '@/components/DiaryWritePage/GobackButton';

const DiaryWritePage = () => {
  return (
    <Container>
      <GobackButton />
      <DiaryForm />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default DiaryWritePage;
