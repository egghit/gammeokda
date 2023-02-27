import { useNavigate } from 'react-router-dom';

import * as S from './GobackButton.style';

import commonIcon from '@/assets/commonIcon';

const GobackButton = () => {
  const navigate = useNavigate();

  return <S.Button onClick={() => navigate(-1)}>{commonIcon.arrowLeft}</S.Button>;
};

export default GobackButton;
