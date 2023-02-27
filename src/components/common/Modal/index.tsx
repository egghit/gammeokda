import * as S from './Modal.style';

import { ReactComponent as CloseButton } from '@/assets/commonIcon/close.svg';
import SadActive from '@/assets/emotionIcon/sad_active.svg';

interface Props {
  onClose: () => void;
  text?: string;
  imagePath?: string;
  buttonText?: string;
  handleButtonEvent?: () => void;
}

const Modal = ({
  onClose,
  text = '아직 준비중입니다....',
  imagePath,
  buttonText,
  handleButtonEvent,
}: Props) => {
  return (
    <S.Dimmer>
      <S.ModalContainer>
        <img src={imagePath || SadActive} width="180rem" height="150rem" alt="sad" />
        <S.ModalCloseButton onClick={onClose} aria-label="close">
          <CloseButton width="2rem" height="2rem" />
        </S.ModalCloseButton>
        <S.ModalText>{text}</S.ModalText>
        {buttonText && <S.ModalButton onClick={handleButtonEvent}>{buttonText}</S.ModalButton>}
      </S.ModalContainer>
    </S.Dimmer>
  );
};

export default Modal;
