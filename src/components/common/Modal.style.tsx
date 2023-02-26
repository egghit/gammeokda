import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 73px 149px;
  gap: 24px;
  isolation: isolate;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffdfb;
  border: 12px solid #6f272f;
  border-radius: 30px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  width: 49px;
  height: 49px;
  right: 0;
  top: 24px;
`;

export const ModalText = styled.p`
  font-weight: 400;
  font-size: 64px;
  color: #6f272f;
`;

export const ModalButton = styled.button`
  background-color: #6f272f;
  border-radius: 28px;
  color: #fffdfb;
  width: 360px;
  height: 94px;
  font-size: 48px;
`;
