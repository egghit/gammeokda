import React from 'react';

import * as Style from './GNB.styles';

import GNB_SVG from '@/assets/GNB';
// 달력 , 추억, 공유, 설정
const LeftLinks = [
  { title: '달력', link: '/' },
  { title: '추억', link: '/' },
];
const RightLinks = [
  { title: '공유', link: '/' },
  { title: '설정', link: '/' },
];

const GNB = () => {
  return (
    <Style.GNBContainer>
      {GNB_SVG.container}
      <Style.NavIcons>
        <Style.LeftIcons>
          {LeftLinks.map((link) => (
            <div key={link.title}>{link.title}</div>
          ))}
        </Style.LeftIcons>
        <Style.LeftIcons>
          {RightLinks.map((link) => (
            <div key={link.title}>{link.title}</div>
          ))}
        </Style.LeftIcons>
      </Style.NavIcons>
    </Style.GNBContainer>
  );
};

export default GNB;
