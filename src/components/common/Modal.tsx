import * as S from './Modal.style';

interface Props {
  setModalOpen: (isOpen: boolean) => void;
  text?: string;
  imagePath?: string;
  buttonText?: string;
  handleButtonEvent?: () => void;
}

const Modal = ({
  setModalOpen,
  text = '아직 준비중입니다....',
  imagePath = '/우는얼굴.png',
  buttonText,
  handleButtonEvent,
}: Props) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <S.ModalContainer>
      <img src={imagePath} width="399px" height="289px" />
      <S.ModalCloseButton onClick={closeModal}>
        <img src="/close_icon.svg" />
      </S.ModalCloseButton>
      <S.ModalText>{text}</S.ModalText>
      {buttonText && <S.ModalButton onClick={handleButtonEvent}>{buttonText}</S.ModalButton>}
    </S.ModalContainer>
  );
};

export default Modal;
