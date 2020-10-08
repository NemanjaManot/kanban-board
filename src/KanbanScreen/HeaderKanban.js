import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
// styles
import * as S from './styles';

const HeaderKanban = ({ onSearch }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const themeContext = useContext(ThemeContext);

  const handleOnFocus = () => setIsSearchFocused(true);

  const handleOnBlur = () => setIsSearchFocused(false);

  return (
    <S.Header>
      <S.Title>Kanban Board</S.Title>
      <S.SearchWrapper>
        <S.SearchIcon color={isSearchFocused ? themeContext.secondaryColor : themeContext.tertiaryColor} size={14} />
        <S.SearchInput placeholder="Search cards" onChange={onSearch} onFocus={handleOnFocus} onBlur={handleOnBlur} />
      </S.SearchWrapper>
    </S.Header>
  );
};

export default HeaderKanban;
