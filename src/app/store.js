import { createStore, combineReducers } from 'redux';
import { allMoviesReducer } from '../features/allMovies/allMoviesSlice';
import { favoriteMoviesReducer } from '../features/favoriteMovies/favoriteMoviesSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

const reducers = {
  allMovies: allMoviesReducer,
  favoriteMovies: favoriteMoviesReducer,
  searchTerm: searchTermReducer,
};

export const store = createStore(combineReducers(reducers));
