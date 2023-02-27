import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './GNB.styles';
import Modal from '../Modal';

import GNB_SVG from '@/assets/GNB';

const RIGHT_LINKS = [
  { title: '달력', link: '/calendar' },
  { title: '설정', link: '/setting' },
];

const GNB = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (link: string) => {
    return pathname === link;
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  if (pathname === '/write') {
    return null;
  }

  console.log(showModal);

  return (
    <>
      <S.GNBContainer>
        {GNB_SVG.container}
        <S.NavIcons>
          <S.SideIcons>
            <S.GNBButton onClick={handleModal}>공유</S.GNBButton>
            <S.GNBButton onClick={() => navigate('/diaries')} isSelected={isSelected('/diaries')}>
              추억
            </S.GNBButton>
          </S.SideIcons>
          <S.HomeButton onClick={() => navigate('/')}>{GNB_SVG.homeButton}</S.HomeButton>
          <S.SideIcons>
            {RIGHT_LINKS.map((link) => (
              <S.GNBButton
                key={link.title}
                onClick={() => navigate(link.link)}
                isSelected={isSelected(link.link)}
              >
                {link.title}
              </S.GNBButton>
            ))}
          </S.SideIcons>
        </S.NavIcons>
      </S.GNBContainer>
      {showModal && <Modal onClose={handleModal} />}
    </>
  );
};

export default GNB;
