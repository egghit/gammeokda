import styled from 'styled-components';

const primaryDark = '#6f272f';
const offWhite = '#FFFDFB';

export const ItemWrapper = styled.article`
  width: 400px;
  margin-bottom: 10px;
  background-color: ${offWhite};
  border: 4px solid ${primaryDark};
  border-radius: 1rem;
  box-shadow: 3px 4px 0 ${primaryDark};
  padding: 1rem;
  font-size: 12px;

  /* @media screen and (max-width: 400px) {
    width: 300px;
    min-height: 98px;
  } */
`;

export const DateWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;
  text-align: center;

  img {
    width: 80%;
  }
`;

export const DiaryDate = styled.p`
  min-height: 1.25rem;
  padding: 0.313rem;
  margin-top: 0.3rem;
  color: ${offWhite};
  background-color: ${primaryDark};
  border-radius: 28px;
  line-height: 1.125;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
`;

export const ContentWrapper = styled.div<{ isMoreContents: boolean }>`
  flex: 4;
  line-height: 1.125;
  display: -webkit-box;
  color: ${primaryDark};
  -webkit-line-clamp: ${(props) => (props.isMoreContents ? 5 : '')};
  -webkit-box-orient: vertical;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ContentImage = styled.div``;

export const ActionButton = styled.button``;

export const ScrollToTopButton = styled.img`
  width: 20px;
`;

export const ScrollButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
