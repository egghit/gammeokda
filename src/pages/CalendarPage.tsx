import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import { DiaryContent } from '@/@types/types';
import CalendarDiaryList from '@/components/CalendarPage/CalendarDiaryList';
import * as S from '@/components/CalendarPage/CalendarPage.style';
import CalendarWrapper from '@/components/CalendarPage/CalendarWrapper';
import Container from '@/components/common/Container';
import Modal from '@/components/common/Modal';
import { db } from '@/firebase';

const CalendarPage = () => {
  const [value, setValue] = useState<Date>(new Date());
  const [diaryList, setDiaryList] = useState<DiaryContent[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  const getDiaryTestData: () => Promise<void> = async () => {
    try {
      const query = await getDocs(collection(db, 'diary'));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any[] = [];
      query.forEach((document) => {
        return data.push(document.data());
      });

      setDiaryList(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    getDiaryTestData();
  }, []);

  return (
    <Container>
      {modalOpen && <Modal onClose={onClose} />}
      <S.CalendarTabList>
        <S.CalendarTab>달력</S.CalendarTab>
        <S.StatisticsTab onClick={showModal}>통계</S.StatisticsTab>
      </S.CalendarTabList>
      <CalendarWrapper setValue={setValue} value={value} diaryList={diaryList} />
      <CalendarDiaryList diaryList={diaryList} value={value} />
    </Container>
  );
};

export default CalendarPage;
