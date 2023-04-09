import styled from 'styled-components';

export const ItemWrapper = styled.article`
  margin-bottom: 2rem;
  font-size: 14px;

  @media screen and (max-width: 400px) {
    width: 340px;
  }
`;

export const DiaryContentWarpper = styled.div`
  padding: 1rem;
  border: 4px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 3px 4px 0 ${({ theme }) => theme.color.primaryDark};
`;

export const DateWrapper = styled.div`
  flex: 3;
  margin-right: 1rem;
  text-align: center;

  img {
    width: 80%;
    height: 100%;
  }
`;

export const DiaryDate = styled.p`
  min-height: 1.25rem;
  padding: 0.313rem;
  border-radius: 28px;
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primaryDark};
  font-family: 'DNFBitBitTTF';
  line-height: 1.125;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
`;

export const ContentWrapper = styled.div<{ hasMoreContents: boolean }>`
  display: -webkit-box;
  flex: 7;
  color: ${({ theme }) => theme.color.primaryDark};
  -webkit-line-clamp: ${(props) => (props.hasMoreContents ? 5 : '')};
  -webkit-box-orient: vertical;
  line-height: 1.312;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ContentImage = styled.div``;

export const EditButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

export const ActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 3px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 50%;
  margin-right: 0.4rem;
  background-color: ${({ theme }) => theme.color.primary};
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const UpButtonWrapper = styled.div``;

export const ScrollButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  svg {
    width: 20px;
    height: 100%;
  }
`;
