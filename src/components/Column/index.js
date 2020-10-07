import React from 'react';
import Card from '../Card';
// Styles
import * as S from './styles';

const Column = ({ cards, heading, color }) => {
  return (
    <S.Column color={color}>
      <S.Header color={color}>
        <h2>{heading}</h2>
        <p>({cards.length})</p>
      </S.Header>
      {cards.map((card) => (
        <Card card={card} color={color} />
      ))}
    </S.Column>
  );
};

export default Column;
