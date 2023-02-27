import styled from 'styled-components';

const DesktopPage = () => {
  return (
    <Container>
      <p>감정을 먹는 다마고치</p>
    </Container>
  );
};

export const Container = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 12rem auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default DesktopPage;
