import { ActionTypes } from './kanbanActions';

const initialState = {
  testState: 'Hello from reducer',
};

export default function kanbanReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TEST: {
      return {
        ...state,
        testState: action.testState,
      };
    }
    default:
      return state;
  }
}
