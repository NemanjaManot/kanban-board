export const ActionTypes = {
  ADD_CARD: 'ADD_CARD',
  EDIT_CARD: 'EDIT_CARD',
  DELETE_CARD: 'DELETE_CARD',
  EDIT_CARD_TYPE: 'EDIT_CARD_TYPE',
};

export const ActionCreators = {
  addCardAction: (cardType) => ({
    type: ActionTypes.ADD_CARD,
    cardType,
  }),
  editCardAction: (cardId, text) => ({
    type: ActionTypes.EDIT_CARD,
    cardId,
    text,
  }),
  deleteCardAction: (cardId) => ({
    type: ActionTypes.DELETE_CARD,
    cardId,
  }),
  editCardTypeAction: (cardId, cardType) => ({
    type: ActionTypes.EDIT_CARD_TYPE,
    cardId,
    cardType,
  }),
};
