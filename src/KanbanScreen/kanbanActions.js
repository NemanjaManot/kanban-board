export const ActionTypes = {
  ADD_CARD: 'ADD_CARD',
  EDIT_CARD: 'EDIT_CARD',
  DELETE_CARD: 'DELETE_CARD',
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
};
