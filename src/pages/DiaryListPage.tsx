import Container from '@/components/common/Container';
import DiaryList from '@/components/DiaryListPage/DiaryList';
import Header from '@/components/DiaryListPage/Header';

const DiaryListPage = () => {
  return (
    <Container>
      <Header />
      <DiaryList />
    </Container>
  );
};

export default DiaryListPage;
