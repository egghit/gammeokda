import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 12rem auto;

  @media screen and (max-width: 768px) {
    width: 480px;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    min-height: 98px;
    padding: 0 0.5rem;
  }
`;

export default Container;
