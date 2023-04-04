import styled from 'styled-components';

export const GNBContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  transform: translateY(90px);
  overflow-y: hidden;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 100px;
`;

export const SideIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

interface GNBButtonProps {
  isSelected?: boolean;
}
export const GNBButton = styled.button<GNBButtonProps>`
  width: 100%;
  font-size: 24px;
  color: ${(props) => (props.isSelected ? props.theme.color.primaryDark : props.theme.color.white)};
`;

export const HomeButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: -50px;
`;
