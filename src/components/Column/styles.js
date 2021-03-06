import styled from 'styled-components';
import { lighten } from 'polished';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) => lighten(0.4, color)};
  width: 33%;
  margin: 0 3px;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 5px solid white;
  }
`;

export const Header = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  border-bottom: 5px solid white;
  position: relative;
`;

export const Heading = styled.h2`
  margin-bottom: 0;
`;

export const IconButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
`;
