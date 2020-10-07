import styled from 'styled-components';
import { lighten } from 'polished';

export const Card = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${({ color }) => lighten(0.15, color)};
`;
