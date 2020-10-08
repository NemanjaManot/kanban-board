import styled from 'styled-components';

export const KanbanScreen = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 992px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  right: 0;
  padding: 5px;
  color: #102540;
  text-align: right;
  cursor: pointer;
  border-width: 0 0 2px 0;
  border-bottom-color: #102540;

  &:focus {
    outline: none;
    border-bottom-color: #e12a5a;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
