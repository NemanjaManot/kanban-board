import { v4 as uuid } from 'uuid';

export const addCard = (cards, type) => [
  ...cards,
  {
    id: uuid(),
    type,
    text: 'Enter text...',
  },
];

export const editCard = (cards, cardId, text) => cards.map((card) => (card.id === cardId ? { ...card, text } : card));

export const deleteCard = (cards, cardId) => cards.filter((card) => card.id !== cardId);

export const editCardType = (cards, cardId, type) =>
  cards.map((card) => (card.id === cardId ? { ...card, type } : card));
