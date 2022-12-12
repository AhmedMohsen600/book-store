const ADD_BOOK = 'book-store/books/ADD';
const REMOVE_BOOK = 'book-store/books/REMOVE';

const initialState = {
  books: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [],
      };
    default:
      return state;
  }
}

export function addBook(book = {}) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}
