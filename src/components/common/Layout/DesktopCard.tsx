import styled from 'styled-components';

import logo from '@/assets/logo.png';

const DesktopCard = () => {
  return (
    <Container>
      <Card>
        <img src={logo} width="200rem" height="140rem" loading="lazy" />
        <p>
          <span>매일</span> 일기를 쓰고 싶지만 귀찮았던 분들,
          <br />
          하루의 <span>감정</span>을 기록하고 싶은 분들,
          <br />
          <span>특별한</span> 하루를 기록해두고 싶은 분들
          <br />
          다마고치와 함께 추억을 기록해봐요!
        </p>
      </Card>
    </Container>
  );
};

const Container = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 5rem 2rem;

  border: 4px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0.125rem 0.25rem 0 ${({ theme }) => theme.color.primaryDark};

  & > p {
    padding: 5px 0px 10px 0px;
    color: ${({ theme }) => theme.color.black};
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 2rem;

    & > span {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export default DesktopCard;
