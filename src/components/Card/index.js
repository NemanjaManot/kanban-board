import React from 'react';
// Styles
import * as S from './styles';

const Card = ({ card }) => {
  return (
    <S.Card>
      <p>{card.text}</p>
    </S.Card>
  );
};

export default Card;
