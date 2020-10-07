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

const KanbanScreen = ({ testState, testAction, cards }) => {
  const handle = () => {
    testAction('Hello from component');
  };

  const todoCards = cards.filter((card) => card.type === kanbanColumns.TO_DO.type);
  const inProgressCards = cards.filter((card) => card.type === kanbanColumns.IN_PROGRESS.type);
  const doneCards = cards.filter((card) => card.type === kanbanColumns.DONE.type);
  return (
    <S.KanbanScreen>
      <S.Title>Kanban Board</S.Title>
      <S.ColumnWrapper>
        <Column cards={todoCards} heading={kanbanColumns.TO_DO.text} color={kanbanColumns.TO_DO.color} />
        <Column
          cards={inProgressCards}
          heading={kanbanColumns.IN_PROGRESS.text}
          color={kanbanColumns.IN_PROGRESS.color}
        />
        <Column cards={doneCards} heading={kanbanColumns.DONE.text} color={kanbanColumns.DONE.color} />
      </S.ColumnWrapper>
      <p>{testState}</p>
      <button onClick={handle}>change text</button>
    </S.KanbanScreen>
  );
};

const mapStateToProps = (state) => {
  return {
    testState: state.kanbanReducer.testState,
    cards: state.kanbanReducer.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      testAction: ActionCreators.testAction,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(KanbanScreen);
