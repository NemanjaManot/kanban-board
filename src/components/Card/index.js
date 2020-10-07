import React from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
// Styles
import * as S from './styles';
// Components
import IconButton from '../IconButton';

const Card = ({ card, color, handleOnDragStart }) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const handleOnBlur = () => {
    console.log('on blur save');
    setIsEdit(false);
  };

  return (
    <S.Card
      draggable="true"
      id={card.id}
      onDragStart={handleOnDragStart}
      color={color}
      onDoubleClick={() => setIsEdit(!isEdit)}
    >
      <S.IconButtonWrapper>
        <IconButton onClick={() => console.log('onClick delete')}>
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
