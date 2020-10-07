import { ActionTypes } from './kanbanActions';
import { v4 as uuid } from 'uuid';

export const initialState = {
  cards: [
    { id: uuid(), type: 'TO_DO', text: 'Review request for proposal ' },
    { id: uuid(), type: 'IN_PROGRESS', text: 'Prepare for client meeting' },
    { id: uuid(), type: 'DONE', text: 'Test latest build' },
    { id: uuid(), type: 'DONE', text: 'Update documentation' },
  ],
};

export default function kanbanReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_CARD: {
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: uuid(),
            type: action.cardType,
            text: 'Enter text...',
          },
        ],
      };
    }
    case ActionTypes.EDIT_CARD: {
      return {
        ...state,
        cards: state.cards.map((card) => (card.id === action.cardId ? { ...card, text: action.text } : card)),
      };
    }
    case ActionTypes.DELETE_CARD: {
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.cardId),
      };
    }
    default:
      return state;
  }
}
