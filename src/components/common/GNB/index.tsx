import { useLocation, useNavigate } from 'react-router-dom';

import * as Style from './GNB.styles';

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
    <Style.GNBContainer>
      {GNB_SVG.container}
      <Style.NavIcons>
        <Style.SideIcons>
          {LEFT_LINKS.map((link) => (
            <Style.GNBButton
              key={link.title}
              onClick={() => navigate(link.link)}
              isSelected={isSelected(link.link)}
            >
              {link.title}
            </Style.GNBButton>
          ))}
        </Style.SideIcons>
        <Style.HomeButton onClick={() => navigate('/')}>{GNB_SVG.homeButton}</Style.HomeButton>
        <Style.SideIcons>
          {RIGHT_LINKS.map((link) => (
            <Style.GNBButton
              key={link.title}
              onClick={() => navigate(link.link)}
              isSelected={isSelected(link.link)}
            >
              {link.title}
            </Style.GNBButton>
          ))}
        </Style.SideIcons>
      </Style.NavIcons>
    </Style.GNBContainer>
  );
};

export default GNB;
