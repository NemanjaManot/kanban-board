import { addCard, editCard, deleteCard, editCardType } from './utils';
import { v4 as uuid } from 'uuid';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('kanban utils', () => {
  const mockCards = [
    { id: 1, text: 'Test 1', type: 'TO_DO' },
    { id: 2, text: 'Test 2', type: 'DONE' },
  ];

  test('addCard test', () => {
    const changedCards = addCard(mockCards, 'TO_DO');

    const expectedResult = [...mockCards, { id: uuid(), type: 'TO_DO', text: 'Enter text...' }];

    expect(changedCards).toEqual(expectedResult);
  });

  test('editCard test', () => {
    const changedCards = editCard(mockCards, 2, 'Changed text');

    const expectedResult = [
      { id: 1, text: 'Test 1', type: 'TO_DO' },
      { id: 2, text: 'Changed text', type: 'DONE' },
    ];

    expect(changedCards).toEqual(expectedResult);
  });

  test('deleteCard test', () => {
    const deletedId = 1;
    const changedCards = deleteCard(mockCards, deletedId);
    const expectedResult = [{ id: 2, text: 'Test 2', type: 'DONE' }];
    expect(changedCards).toEqual(expectedResult);
  });

  test('editCardType test', () => {
    const changedCards = editCardType(mockCards, 2, 'TO_DO');

    const expectedResult = [
      { id: 1, text: 'Test 1', type: 'TO_DO' },
      { id: 2, text: 'Test 2', type: 'TO_DO' },
    ];

    expect(changedCards).toEqual(expectedResult);
  });
});
