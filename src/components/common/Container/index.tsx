import styled from 'styled-components';

import { CONTAINER_VW, MOBILE_VW } from '@/constants';

const Container = styled.section`
  width: ${CONTAINER_VW};
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 10px 180px 10px;

  @media screen and (max-width: ${MOBILE_VW}) {
    width: 100vw;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export default Container;
