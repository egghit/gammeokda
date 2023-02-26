import { useState } from 'react';

import GNB from '@/components/common/GNB';
import Damagochi from '@/components/MainPage/Damagochi';
import ProgressBar from '@/components/MainPage/ProgressBar';

const IndexPage = () => {
  const [isGrow, setIsGrow] = useState(false);

  return (
    <>
      <ProgressBar />
      <Damagochi age={'baby'} name={'곶감이'} isGrow={isGrow} setIsGrow={setIsGrow} />
      <GNB />
    </>
  );
};

export default IndexPage;
