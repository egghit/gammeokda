import styled from 'styled-components';

export const MenuWrapper = styled.section`
  :nth-child(2) {
    margin-top: 20px;
  }
`;

export const SettingTitle = styled.h2`
  color: ${(props) => props.theme.color.black};
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

export const SettingMenuLink = styled.a`
  color: ${(props) => props.theme.color.titlePink};
  display: block;
  font-size: 1.25rem;
`;

export const SettingMenuButton = styled.button`
  color: ${(props) => props.theme.color.titlePink};
  font-size: 1.25rem;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 310px 19px 26px;
  background-color: ${(props) => props.theme.color.white};
  button:first-child,
  a:first-child {
    margin-bottom: 12px;
  }
`;
