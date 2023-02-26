import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Style from './GNB.styles';

import GNB_SVG from '@/assets/GNB';
// 달력 , 추억, 공유, 설정
const LeftLinks = [
  { title: '달력', link: '/calendar' },
  { title: '추억', link: '/diaries' },
];
const RightLinks = [
  { title: '공유', link: '/' },
  { title: '설정', link: '/' },
];

const GNB = () => {
  const navigate = useNavigate();
  return (
    <Style.GNBContainer>
      {GNB_SVG.container}
      <Style.NavIcons>
        <Style.SideIcons>
          {LeftLinks.map((link) => (
            <button key={link.title} onClick={() => navigate(link.link)}>
              {link.title}
            </button>
          ))}
        </Style.SideIcons>
        <Style.HomeButton>{GNB_SVG.homeButton}</Style.HomeButton>
        <Style.SideIcons>
          {RightLinks.map((link) => (
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
