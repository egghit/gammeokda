import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;

export const GaugeWrapper = styled.div`
  position: absolute;
  top: 80px;
  div {
    font-size: 26px;
    color: ${({ theme }) => theme.color.white};
    text-align: center;
  }
`;
