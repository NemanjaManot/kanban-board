export const ActionTypes = {
  ADD_CARD: 'ADD_CARD',
  EDIT_CARD: 'EDIT_CARD',
  DELETE_CARD: 'DELETE_CARD',
  EDIT_CARD_TYPE: 'EDIT_CARD_TYPE',
  SAVE_CURRENT_CARD_ID: 'SAVE_CURRENT_CARD_ID',
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
  editCardTypeAction: (cardType) => ({
    type: ActionTypes.EDIT_CARD_TYPE,
    cardType,
  }),
  saveCurrentCardIdAction: (cardId) => ({
    type: ActionTypes.SAVE_CURRENT_CARD_ID,
    cardId,
  }),
};
