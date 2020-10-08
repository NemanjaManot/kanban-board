import React, { useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThemeContext } from 'styled-components';
// Actions
import { ActionCreators } from './kanbanActions';
// Config
import { kanbanColumns } from '../config';
// Components
import Column from '../components/Column';
// styles
import * as S from './styles';

let debounce;

const KanbanScreen = ({
  cards,
  addCardAction,
  editCardAction,
  deleteCardAction,
  editCardTypeAction,
  saveCurrentCardIdAction,
}) => {
  const [searchedResult, setSearchedResult] = useState(cards);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const themeContext = useContext(ThemeContext);

  const getColumnCards = (type) => searchedResult.filter((card) => card.type === type);

  useEffect(() => {
    setSearchedResult(cards);
  }, [cards]);

  useEffect(() => {
    return () => {
      if (debounce) {
        clearTimeout(debounce);
      }
    };
  }, []);

  const handleSearchCard = (e) => {
    const query = e.target.value;
    if (debounce) {
      clearTimeout(debounce);
    }
    debounce = setTimeout(() => {
      setSearchedResult(cards.filter((card) => card.text.toLowerCase().includes(query.toLowerCase())));
    }, 500);
  };

  const handleOnFocus = () => setIsSearchFocused(true);

  const handleOnBlur = () => setIsSearchFocused(false);

  return (
    <S.KanbanScreen>
      <S.Header>
        <S.Title>Kanban Board</S.Title>
        <S.SearchWrapper>
          <S.SearchIcon color={isSearchFocused ? themeContext.secondaryColor : themeContext.tertiaryColor} size={14} />
          <S.SearchInput
            placeholder="Search cards"
            onChange={handleSearchCard}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </S.SearchWrapper>
      </S.Header>
      <S.ColumnWrapper>
        {Object.entries(kanbanColumns).map(([key, value]) => {
          return (
            <Column
              key={key}
              type={value.type}
              cards={getColumnCards(value.type)}
              heading={value.text}
              color={value.color}
              addCardAction={() => addCardAction(value.type)}
              editCardAction={editCardAction}
              deleteCardAction={deleteCardAction}
              editCardTypeAction={editCardTypeAction}
              saveCurrentCardIdAction={saveCurrentCardIdAction}
            />
          );
        })}
      </S.ColumnWrapper>
    </S.KanbanScreen>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.kanbanReducer.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addCardAction: ActionCreators.addCardAction,
      editCardAction: ActionCreators.editCardAction,
      deleteCardAction: ActionCreators.deleteCardAction,
      editCardTypeAction: ActionCreators.editCardTypeAction,
      saveCurrentCardIdAction: ActionCreators.saveCurrentCardIdAction,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(KanbanScreen);
