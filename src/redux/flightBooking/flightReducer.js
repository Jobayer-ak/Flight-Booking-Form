/* eslint-disable no-case-declarations */
import { BOOK, DELETE } from './actionTypes';

const initialState = [];

const flightReducer = (state = initialState, action) => {
  const copiedState = [...state];

  const { type, payload, id } = action;
  switch (type) {
    case BOOK:
      const lastBookId = copiedState[copiedState.length - 1]?.id;
      const newBook = { ...payload, id: lastBookId ? lastBookId + 1 : 1 };

      if (copiedState.length < 3) {
        copiedState.push(newBook);
      } else {
        return copiedState;
      }
      return copiedState;

    case DELETE:
      const updateState = copiedState.filter((book) => book.id !== id);
      return updateState;

    default:
      return state;
  }
};

export default flightReducer;
