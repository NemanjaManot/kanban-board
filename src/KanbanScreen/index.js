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

const KanbanScreen = ({ cards, addCardAction, editCardAction, deleteCardAction, editCardTypeAction }) => {
  const todoCards = cards.filter((card) => card.type === kanbanColumns.TO_DO.type);
  const inProgressCards = cards.filter((card) => card.type === kanbanColumns.IN_PROGRESS.type);
  const doneCards = cards.filter((card) => card.type === kanbanColumns.DONE.type);

  return (
    <S.KanbanScreen>
      <S.Title>Kanban Board</S.Title>
      <S.ColumnWrapper>
        <Column
          id={kanbanColumns.TO_DO.type}
          cards={todoCards}
          heading={kanbanColumns.TO_DO.text}
          color={kanbanColumns.TO_DO.color}
          addCardAction={() => addCardAction(kanbanColumns.TO_DO.type)}
          editCardAction={editCardAction}
          deleteCardAction={deleteCardAction}
          editCardTypeAction={editCardTypeAction}
        />
        <Column
          id={kanbanColumns.IN_PROGRESS.type}
          cards={inProgressCards}
          heading={kanbanColumns.IN_PROGRESS.text}
          color={kanbanColumns.IN_PROGRESS.color}
          addCardAction={() => addCardAction(kanbanColumns.IN_PROGRESS.type)}
          editCardAction={editCardAction}
          deleteCardAction={deleteCardAction}
          editCardTypeAction={editCardTypeAction}
        />
        <Column
          id={kanbanColumns.DONE.type}
          cards={doneCards}
          heading={kanbanColumns.DONE.text}
          color={kanbanColumns.DONE.color}
          addCardAction={() => addCardAction(kanbanColumns.DONE.type)}
          editCardAction={editCardAction}
          deleteCardAction={deleteCardAction}
          editCardTypeAction={editCardTypeAction}
        />
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
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(KanbanScreen);
