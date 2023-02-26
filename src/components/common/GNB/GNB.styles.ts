import styled from 'styled-components';

export const GNBContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: -4px;
`;

export const NavIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 100px;
`;
export const LeftIcons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  div {
    width: 100%;
    font-size: 24px;
    color: ${(props) => props.theme.colors.white};
  }
`;
