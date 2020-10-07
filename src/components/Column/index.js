import React from 'react';
import Card from '../Card';
// Styles
import * as S from './styles';

const Column = ({ cards, heading }) => {
  return (
    <S.Column>
      <h2>{heading}</h2>
      <p>({cards.length})</p>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </S.Column>
  );
};

export default Column;
