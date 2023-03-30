import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  flex-direction column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ServiceTitle = styled.div`
  color: ${(props) => props.theme.color.primaryDark};
  font-size: 2rem;
  margin-bottom: 0.25rem;

  & > p {
    color: ${(props) => props.theme.color.primary};
    font-size: 1.5rem;
  }
`;

export const MenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SettingTitle = styled.h2`
  margin-left: 0.5rem;
  color: ${(props) => props.theme.color.black};
  font-size: 1.5rem;
`;

export const SettingMenuLink = styled.a`
  width: max-content;
  height: fit-content;
  color: ${(props) => props.theme.color.titlePink};
  display: block;
  font-size: 1.25rem;
`;

export const SettingMenuButton = styled.button`
  width: max-content;
  height: fit-content;
  color: ${(props) => props.theme.color.titlePink};
  font-size: 1.25rem;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  padding: 20px 310px 19px 26px;
  background-color: ${(props) => props.theme.color.white};

  button:first-child,
  a:first-child {
    margin-bottom: 12px;
  }
`;
