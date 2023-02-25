import { collection, getDocs, doc, setDoc, Timestamp } from 'firebase/firestore';
import { useEffect } from 'react';

import { Diary } from '@/@types/types';
import { db } from '@/firebase';

const Test = () => {
  const getDiaryTestData: () => Promise<void> = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'diary'));
      querySnapshot.forEach((document) => {
        // TODO: 가져온 모든 문서들을 확인하기 위한 FUNCTION, 사용 방법 확인 후 삭제 예정 by.freya 230226
        // console.log(document.id, document.data());
        document.data();
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const postDiaryTestData = async (postData: Diary) => {
    try {
      //
      await setDoc(doc(db, 'diary', 'test'), postData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error;
    }
  };

  const diaryData: Diary = {
    date: Timestamp.fromDate(new Date('December 10, 2022')),
    emotion: '기쁨',
    photo: 'http://',
    text: 'test string',
    id: '1',
  };

  useEffect(() => {
    getDiaryTestData();
  }, []);

  return (
    <div>
      <button onClick={() => postDiaryTestData(diaryData)}>버튼</button>
    </div>
  );
};

export default Test;
