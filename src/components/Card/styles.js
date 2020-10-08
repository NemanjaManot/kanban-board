import styled from 'styled-components';
import { lighten } from 'polished';

export const Card = styled.div`
  width: 70%;
  height: 120px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  background-color: ${({ color }) => lighten(0.15, color)};
  position: relative;
  cursor: grab;
`;

export const IconButtonWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: none;

  ${Card}:hover & {
    display: block;
  }
`;

export const TextArea = styled.textarea`
  border-width: 0px;
  border: none;
  background-color: transparent;
  background-color: ${({ color }) => lighten(0.3, color)};
  color: white;
  font-size: 14px;
`;
