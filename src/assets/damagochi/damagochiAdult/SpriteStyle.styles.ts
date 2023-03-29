import styled, { css, keyframes } from 'styled-components';

export const ImageContainer = styled.div`
  ${({ src }: { src: string }) => {
    return css`
      width: 120px;
      height: 100%;
      margin: 2% auto;
      background: url(${src}) left center;
      animation: ${play} 4s steps(8) infinite;
    `;
  }}
`;

const play = keyframes`
100%{
  background-position: -960px;
}
`;
