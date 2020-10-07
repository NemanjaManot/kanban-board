import React from 'react';
import { FaPlus } from 'react-icons/fa';
// Components
import Card from '../Card';
import IconButton from '../IconButton';
// Styles
import * as S from './styles';

const Column = ({ cards, heading, color, id, handleOnDrop, handleOnDragOver, handleOnDragStart }) => {
  return (
    <S.Column color={color} id={id} onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
      <S.Header color={color}>
        <S.Heading>{heading}</S.Heading>
        <p>({cards.length})</p>
        <S.IconButtonWrapper>
          <IconButton onClick={() => console.log('onClick plus')}>
            <FaPlus />
          </IconButton>
        </S.IconButtonWrapper>
      </S.Header>
      {cards.map((card) => (
        <Card key={card.id} card={card} color={color} handleOnDragStart={handleOnDragStart} />
      ))}
    </S.Column>
  );
};

export default Column;
