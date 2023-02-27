import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 12rem auto;

  @media screen and (max-width: 400px) {
    width: 340px;
    min-height: 98px;
  }
`;
