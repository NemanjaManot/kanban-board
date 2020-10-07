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

const KanbanScreen = ({ cards, addCardAction, editCardAction, deleteCardAction }) => {
  const todoCards = cards.filter((card) => card.type === kanbanColumns.TO_DO.type);
  const inProgressCards = cards.filter((card) => card.type === kanbanColumns.IN_PROGRESS.type);
  const doneCards = cards.filter((card) => card.type === kanbanColumns.DONE.type);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
    console.log('drag');
    console.log(ev.currentTarget.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    console.log('drop');
    console.log(ev.currentTarget.id);
  };

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
          handleOnDragOver={allowDrop}
          handleOnDrop={drop}
          handleOnDragStart={drag}
        />
        <Column
          id={kanbanColumns.IN_PROGRESS.type}
          cards={inProgressCards}
          heading={kanbanColumns.IN_PROGRESS.text}
          color={kanbanColumns.IN_PROGRESS.color}
          addCardAction={() => addCardAction(kanbanColumns.IN_PROGRESS.type)}
          editCardAction={editCardAction}
          deleteCardAction={deleteCardAction}
          handleOnDragOver={allowDrop}
          handleOnDrop={drop}
          handleOnDragStart={drag}
        />
        <Column
          id={kanbanColumns.DONE.type}
          cards={doneCards}
          heading={kanbanColumns.DONE.text}
          color={kanbanColumns.DONE.color}
          addCardAction={() => addCardAction(kanbanColumns.DONE.type)}
          editCardAction={editCardAction}
          deleteCardAction={deleteCardAction}
          handleOnDragOver={allowDrop}
          handleOnDrop={drop}
          handleOnDragStart={drag}
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
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(KanbanScreen);
