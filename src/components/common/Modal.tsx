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
  imagePath = '/우는얼굴.svg',
  buttonText,
  handleButtonEvent,
}: Props) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <S.Dimmer>
      <S.ModalContainer>
        <img src={imagePath} width="200px" height="194px" alt="sad" />
        <S.ModalCloseButton onClick={closeModal}>
          <img src="/close_icon.svg" alt="close_button" />
        </S.ModalCloseButton>
        <S.ModalText>{text}</S.ModalText>
        {buttonText && <S.ModalButton onClick={handleButtonEvent}>{buttonText}</S.ModalButton>}
      </S.ModalContainer>
    </S.Dimmer>
  );
};

export default Modal;
