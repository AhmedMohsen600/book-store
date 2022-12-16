import { createAsyncThunk } from '@reduxjs/toolkit';
import { generateId } from '../../helper/generateId';
import { getData, postData, deleteBook } from '../../apis/request';
import { baseURL } from '../../constant/url';

const ADD_BOOK = 'book-store/books/ADD';
const REMOVE_BOOK = 'book-store/books/REMOVE';
const GET_BOOKS = 'book-store/books/GET_BOOKS';
const ADD_BOOK_THUNK = 'book-store/books/ADD_BOOK_THUNK';
const REMOVE_BOOK_THUNK = 'book-store/books/REMOVE_BOOK_THUNK';
const initialState = {
  books: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_BOOKS}/fulfilled`:
      return {
        ...state,
        books: action.payload,
      };
    case `${ADD_BOOK_THUNK}/fulfilled`:
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: generateId() }],
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: generateId() }],
      };
    case `${REMOVE_BOOK_THUNK}/fulfilled`:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
}

export function addBook(book = {}) {
  return { type: ADD_BOOK, payload: book };
}

export const fetchBooks = createAsyncThunk(GET_BOOKS, async () => {
  const formatedBooks = [];
  const data = await getData(baseURL);
  Object.keys(data).forEach((key) => {
    formatedBooks.push({ ...data[key][0], id: key });
  });
  return formatedBooks;
});

export const addBookThunk = createAsyncThunk(ADD_BOOK, async (book = {}) => {
  await postData(baseURL, {
    ...book,
    item_id: generateId(),
    category: 'Action',
  });
});

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}

export const removeBookThunk = createAsyncThunk(
  REMOVE_BOOK_THUNK,
  async (id) => {
    await deleteBook(baseURL, id);
    return id;
  }
);
