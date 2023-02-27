import styled from 'styled-components';

export const Container = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 400px) {
    width: 340px;
    min-height: 98px;
  }
`;
