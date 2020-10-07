import styled from 'styled-components';
import { lighten } from 'polished';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) => lighten(0.4, color)};
  width: 33%;
  margin: 0 3px;
`;

export const Header = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  border-bottom: 5px solid white;
`;
