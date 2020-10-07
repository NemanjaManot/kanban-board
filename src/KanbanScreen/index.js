import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { ActionCreators } from './kanbanActions';

const KanbanScreen = ({ testState, testAction }) => {
  const handle = () => {
    testAction('Hello from component');
  };

  return (
    <div>
      <p>{testState}</p>
      <button onClick={handle}>change text</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    testState: state.kanbanReducer.testState,
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
