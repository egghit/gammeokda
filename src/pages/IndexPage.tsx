import { useState } from 'react';

import GNB from '@/components/common/GNB';
import Damagochi from '@/components/MainPage/Damagochi';
import ProgressBar from '@/components/MainPage/ProgressBar';

export type DamagochiAgeTypes = 'egg' | 'baby' | 'adult';

interface UserDateProps {
  age: DamagochiAgeTypes;
  name: string;
}
const DEFAULT_NAME = '곶감이';

const IndexPage = () => {
  const [isGrow, setIsGrow] = useState(false);

  //유저 데이터로
  const userDate: UserDateProps = {
    age: 'egg',
    name: localStorage.getItem('name') || DEFAULT_NAME,
  };

  // 몇개의 다이어리가 있는지
  const diaryCounting = 0;
  return (
    <>
      <ProgressBar diaryCounting={diaryCounting} age={userDate.age} />
      <Damagochi age={userDate.age} name={userDate.name} isGrow={isGrow} setIsGrow={setIsGrow} />
      <GNB />
    </>
  );
};

export default IndexPage;
