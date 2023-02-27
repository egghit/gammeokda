import { useState } from 'react';

import * as S from './Setting.style';

import { ReactComponent as DamagochiEgg } from '@/assets/damagochi_egg.svg';
import Modal from '@/components/common/Modal';
import { GITHUB_PAGE_LINK } from '@/constants';

const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <Modal onClose={onClose} />}
      <S.IntroContainer>
        <DamagochiEgg width="10rem" height="10rem" />
        <S.ServiceTitle>
          감정을 먹는
          <br />
          다마고치
          <p>열심히 준비중이에요!</p>
        </S.ServiceTitle>
      </S.IntroContainer>
      <S.MenuWrapper>
        <S.SettingTitle>고객 센터</S.SettingTitle>
        <S.MenuItemWrapper>
          <S.SettingMenuLink href={GITHUB_PAGE_LINK} target="_blank">
            FAQ
          </S.SettingMenuLink>
          <S.SettingMenuLink href={GITHUB_PAGE_LINK} target="_blank">
            서비스 설명
          </S.SettingMenuLink>
        </S.MenuItemWrapper>
      </S.MenuWrapper>
      <S.MenuWrapper>
        <S.SettingTitle>계정 관리</S.SettingTitle>
        <S.MenuItemWrapper>
          <S.SettingMenuButton onClick={showModal}>로그아웃</S.SettingMenuButton>
          <S.SettingMenuButton onClick={showModal}>회원 탈퇴</S.SettingMenuButton>
        </S.MenuItemWrapper>
      </S.MenuWrapper>
    </>
  );
};

export default Setting;
