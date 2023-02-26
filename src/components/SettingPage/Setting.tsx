import { useState } from 'react';

import * as S from './Setting.style';

import Modal from '@/components/common/Modal';
import { Container } from '@/components/DiaryListPage/DiaryListPage.style';
import { GITHUB_PAGE_LINK } from '@/constants';

const Setting = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <Container>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
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
    </Container>
  );
};

export default Setting;
