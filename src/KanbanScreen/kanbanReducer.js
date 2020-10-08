import { ActionTypes } from './kanbanActions';
import { v4 as uuid } from 'uuid';
// functions
import { addCard, editCard, deleteCard, editCardType } from '../utils';

const initialCards = [
  { id: uuid(), type: 'TO_DO', text: 'Review request for proposal ' },
  { id: uuid(), type: 'IN_PROGRESS', text: 'Prepare for client meeting' },
  { id: uuid(), type: 'DONE', text: 'Test latest build' },
  { id: uuid(), type: 'DONE', text: 'Update documentation' },
];

export const initialState = {
  cards: initialCards,
  currentCardId: null,
};

export default function kanbanReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_CARD: {
      return {
        ...state,
        cards: addCard(state.cards, action.cardType),
      };
    }
    case ActionTypes.EDIT_CARD: {
      return {
        ...state,
        cards: editCard(state.cards, action.cardId, action.text),
      };
    }
    case ActionTypes.DELETE_CARD: {
      return {
        ...state,
        cards: deleteCard(state.cards, action.cardId),
      };
    }
    case ActionTypes.EDIT_CARD_TYPE: {
      return {
        ...state,
        cards: editCardType(state.cards, state.currentCardId, action.cardType),
      };
    }
    case ActionTypes.SAVE_CURRENT_CARD_ID: {
      return {
        ...state,
        currentCardId: action.cardId,
      };
    }
    default:
      return state;
  }
}
