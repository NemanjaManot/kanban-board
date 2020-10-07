import React from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
// Styles
import * as S from './styles';
// Components
import IconButton from '../IconButton';

const Card = ({ card, color, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const handleOnBlur = (e) => {
    onEdit(card.id, e.target.value);
    setIsEdit(false);
  };

  const handleOnDelete = () => {
    onDelete(card.id);
  };

  const handleOnDoubleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <S.Card color={color} onDoubleClick={handleOnDoubleClick}>
      <S.IconButtonWrapper>
        <IconButton onClick={handleOnDelete}>
          <FaRegWindowClose size={18} />
        </IconButton>
      </S.IconButtonWrapper>
      {isEdit ? (
        <S.TextArea defaultValue={card.text} onBlur={handleOnBlur} rows={4} color={color} />
      ) : (
        <p>{card.text}</p>
      )}
    </S.Card>
  );
};

export default Card;
