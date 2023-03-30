import styled from 'styled-components';

const Container = styled.section`
  width: 420px;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 10px 180px 10px;

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export default Container;
