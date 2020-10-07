import React from 'react';
// Styles
import * as S from './styles';

const Card = ({ card, color }) => {
  return (
    <S.Card color={color}>
      <p>{card.text}</p>
    </S.Card>
  );
};

export default Card;
