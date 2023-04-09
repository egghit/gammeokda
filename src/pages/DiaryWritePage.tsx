import Container from '@/components/common/Container';
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

export default DiaryWritePage;
