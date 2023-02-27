import { Container } from './index.style';

import DiaryForm from '@/components/DiaryWritePage/DiaryForm';
import GobackButton from '@/components/DiaryWritePage/GobackButton';

const DiaryWritePage = () => {
  return (
    <Container
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GobackButton />
      <DiaryForm />
    </Container>
  );
};

export default DiaryWritePage;
