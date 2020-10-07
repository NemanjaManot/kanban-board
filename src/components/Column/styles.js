import styled from 'styled-components';
import { lighten } from 'polished';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 5%;
  background-color: ${({ color }) => lighten(0.4, color)};
  border: 1px solid blue;
`;

export const Header = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;
