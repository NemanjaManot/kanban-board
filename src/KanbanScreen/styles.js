import styled from 'styled-components';

export const KanbanScreen = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  color: #102540;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5% auto;
`;

export const SearchInput = styled.input`
  position: absolute;
  right: 0;
  padding: 5px;
  color: #102540;
  text-align: right;
  cursor: pointer;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
