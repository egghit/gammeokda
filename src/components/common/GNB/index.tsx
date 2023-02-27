import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Style from './GNB.styles';

import GNB_SVG from '@/assets/GNB';
// 달력 , 추억, 공유, 설정
const LEFT_LINKS = [
  { title: '공유', link: '/' },
  { title: '추억', link: '/diaries' },
];
const RIGHT_LINKS = [
  { title: '달력', link: '/calendar' },
  { title: '설정', link: '/' },
];

const GNB = () => {
  const navigate = useNavigate();
  return (
    <Style.GNBContainer>
      {GNB_SVG.container}
      <Style.NavIcons>
        <Style.SideIcons>
          {LEFT_LINKS.map((link) => (
            <button key={link.title} onClick={() => navigate(link.link)}>
              {link.title}
            </button>
          ))}
        </Style.SideIcons>
        <Style.HomeButton onClick={() => navigate('/')}>{GNB_SVG.homeButton}</Style.HomeButton>
        <Style.SideIcons>
          {RIGHT_LINKS.map((link) => (
            <button key={link.title} onClick={() => navigate(link.link)}>
              {link.title}
            </button>
          ))}
        </Style.SideIcons>
      </Style.NavIcons>
    </Style.GNBContainer>
  );
};

export default GNB;
