import Container from '@/components/common/Container';
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
        margin: '0rem auto 4rem auto',
      }}
    >
      <GobackButton />
      <DiaryForm />
    </Container>
  );
};

export default DiaryWritePage;
