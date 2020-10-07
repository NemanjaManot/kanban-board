import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { ActionCreators } from './kanbanActions';
// Config
import { kanbanColumns } from '../config';
// Components
import Column from '../components/Column';
// styles
import * as S from './styles';

const KanbanScreen = ({
  cards,
  addCardAction,
  editCardAction,
  deleteCardAction,
  editCardTypeAction,
  saveCurrentCardIdAction,
}) => {
  const getColumnCards = (type) => cards.filter((card) => card.type === type);

  return (
    <S.KanbanScreen>
      <S.Title>Kanban Board</S.Title>
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
