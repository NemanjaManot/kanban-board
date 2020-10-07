import React from 'react';
import { FaPlus } from 'react-icons/fa';
// Components
import Card from '../Card';
import IconButton from '../IconButton';
// Styles
import * as S from './styles';

const Column = ({ cards, heading, color, addCardAction, editCardAction, deleteCardAction }) => {
  return (
    <S.Column color={color}>
      <S.Header color={color}>
        <S.Heading>{heading}</S.Heading>
        <p>({cards.length})</p>
        <S.IconButtonWrapper>
          <IconButton onClick={addCardAction}>
            <FaPlus />
          </IconButton>
        </S.IconButtonWrapper>
      </S.Header>
      {cards.map((card) => (
        <Card key={card.id} card={card} color={color} onEdit={editCardAction} onDelete={deleteCardAction} />
      ))}
    </S.Column>
  );
};

export default Column;
