import styled from 'styled-components';

export const CalendarTileModalContainer = styled.div`
  position: absolute;
  width: 205px;
  height: 40px;
  left: -150px;
  bottom: 62px;
  background: #484848;
  color: white;
  border-radius: 5px;
  padding: 12px 12.8px;

  ::after {
    border: 10px solid transparent;
    border-top: 10px solid #484848;
    content: '';
    position: absolute;
    top: 40px;
    left: 160px;
  }
`;
