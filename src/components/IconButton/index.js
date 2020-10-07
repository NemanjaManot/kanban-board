import React from 'react';
// Styles
import * as S from './styles';

const IconButton = ({ children, onClick }) => {
  return <S.IconButton onClick={onClick}>{children}</S.IconButton>;
};

export default IconButton;
