import { ActionTypes } from './kanbanActions';

const initialState = {
  testState: 'Hello from reducer',
  cards: [
    { id: 1, type: 'TO_DO', text: 'Hey ' },
    { id: 2, type: 'IN_PROGRESS', text: 'hey you in progress' },
    { id: 3, type: 'DONE', text: 'im done' },
    { id: 4, type: 'DONE', text: 'im done too' },
  ],
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
