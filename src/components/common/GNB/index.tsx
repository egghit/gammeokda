import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './GNB.styles';

import GNB_SVG from '@/assets/GNB';
const LEFT_LINKS = [
  { title: '공유', link: '' },
  { title: '추억', link: '/diaries' },
];
const RIGHT_LINKS = [
  { title: '달력', link: '/calendar' },
  { title: '설정', link: '/setting' },
];

const GNB = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (link: string) => {
    return pathname === link;
  };

  if (pathname === '/write') {
    return null;
  }

  return (
    <S.GNBContainer>
      {GNB_SVG.container}
      <S.NavIcons>
        <S.SideIcons>
          {LEFT_LINKS.map((link) => (
            <S.GNBButton
              key={link.title}
              onClick={() => navigate(link.link)}
              isSelected={isSelected(link.link)}
            >
              {link.title}
            </S.GNBButton>
          ))}
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
  );
};

export default GNB;
