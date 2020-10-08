import React from 'react';
import { FaPlus } from 'react-icons/fa';
// Components
import Card from '../Card';
import IconButton from '../IconButton';
// Styles
import * as S from './styles';

const Column = ({
  cards,
  heading,
  color,
  addCardAction,
  editCardAction,
  deleteCardAction,
  type,
  editCardTypeAction,
  saveCurrentCardIdAction,
}) => {
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDragStart = (e) => {
    e.dataTransfer.setData('text', e.target.id);
    saveCurrentCardIdAction(e.target.id);
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    editCardTypeAction(e.currentTarget.id);
  };

  return (
    <S.Column color={color} id={type} onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
      <S.Header color={color}>
        <S.Heading>{heading}</S.Heading>
        <p>({cards.length})</p>
        <S.IconButtonWrapper>
          <IconButton onClick={addCardAction}>
            <FaPlus cursor="pointer" />
          </IconButton>
        </S.IconButtonWrapper>
      </S.Header>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          color={color}
          onEdit={editCardAction}
          onDelete={deleteCardAction}
          handleOnDragStart={handleOnDragStart}
        />
      ))}
    </S.Column>
  );
};

export default Column;
