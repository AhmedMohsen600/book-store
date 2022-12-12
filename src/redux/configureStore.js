import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducers = combineReducers({
  booksReducer,
  categoriesReducer,
});

export const store = configureStore(rootReducers);
