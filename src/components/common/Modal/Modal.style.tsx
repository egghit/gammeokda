import styled from 'styled-components';

export const Dimmer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 4.625rem;
  gap: 1.5rem;
  isolation: isolate;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.color.white};
  border: 6px solid ${(props) => props.theme.color.primaryDark};
  border-radius: 1rem;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

export const ModalText = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.color.primaryDark};
`;

export const ModalButton = styled.button`
  background-color: ${(props) => props.theme.color.primaryDark};
  border-radius: 1.75rem;
  color: ${(props) => props.theme.color.white};
  width: 11.25rem;
  height: 3rem;
  font-size: 1.5rem;
`;
