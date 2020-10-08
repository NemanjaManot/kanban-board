import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { ActionCreators } from './kanbanActions';
// Config
import { kanbanColumns } from '../config';
// Components
import Column from '../components/Column';
import HeaderKanban from './HeaderKanban';
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

  return (
    <S.KanbanScreen>
      <HeaderKanban onSearch={handleSearchCard} />
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
