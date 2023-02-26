import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 74px;
  gap: 24px;
  isolation: isolate;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.color.white};
  border: 6px solid ${(props) => props.theme.color.primaryDark};
  border-radius: 15px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  width: 15px;
  height: 15px;
  right: 40px;
  top: 5px;
`;

export const ModalText = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.color.primaryDark};
`;

export const ModalButton = styled.button`
  background-color: ${(props) => props.theme.color.primaryDark};
  border-radius: 28px;
  color: ${(props) => props.theme.color.white};
  width: 180px;
  height: 47px;
  font-size: 24px;
`;
