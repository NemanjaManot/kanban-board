import React from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
// Styles
import * as S from './styles';
// Components
import IconButton from '../IconButton';

const Card = ({ card, color }) => {
  return (
    <S.Card color={color}>
      <S.IconButtonWrapper>
        <IconButton onClick={() => console.log('onClick delete')}>
          <FaRegWindowClose size={18} />
        </IconButton>
      </S.IconButtonWrapper>
      <p>{card.text}</p>
    </S.Card>
  );
};

export default Card;
