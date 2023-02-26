import styled from 'styled-components';

export const GNBContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 34.5rem;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0px;
`;

export const NavIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SideIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  button {
    width: 100%;
    font-size: 24px;
    /* color: ${(props) => props.theme.colors.white}; */
  }
`;

export const HomeButton = styled.div`
  position: absolute;
  left: 40.5%;
  top: -105px;
`;
