import * as S from './Modal.style';

const Modal = ({ setModalOpen, text, imagePath, buttonText, handleButtonEvent }: PropsType) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <S.ModalContainer>
      <img src={imagePath || '/우는얼굴.png'} width="399px" height="289px" />
      <S.ModalCloseButton onClick={closeModal}>X</S.ModalCloseButton>
      <S.ModalText>{text || '아직 준비중입니다....'}</S.ModalText>
      {buttonText && <S.ModalButton onClick={handleButtonEvent}>{buttonText}</S.ModalButton>}
    </S.ModalContainer>
  );
};

export default Modal;
