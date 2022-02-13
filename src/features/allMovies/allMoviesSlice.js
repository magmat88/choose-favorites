import { allMoviesData } from '../../data';
import { ALL_MOVIES__LOAD_DATA } from '../../app/constants/actionTypes';
import { FAVORITE_MOVIES__LIKE_MOVIE } from '../../app/constants/actionTypes';
import { FAVORITE_MOVIES__DISLIKE_MOVIE } from '../../app/constants/actionTypes';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

export const loadData = () => {
  return {
    type: ALL_MOVIES__LOAD_DATA,
    payload: allMoviesData,
  };
};

const initialAllMovies = [];
export const allMoviesReducer = (allMovies = initialAllMovies, action) => {
  switch (action.type) {
    case ALL_MOVIES__LOAD_DATA:
      return action.payload;
    case FAVORITE_MOVIES__LIKE_MOVIE:
      return allMovies.filter((movie) => movie.id !== action.payload.id);
    case FAVORITE_MOVIES__DISLIKE_MOVIE:
      return [...allMovies, action.payload];
    default:
      return allMovies;
  }
};

export const selectAllMovies = (state) => state.allMovies;

export const selectFilteredAllMovies = (state) => {
  const allMovies = selectAllMovies(state);
  const searchTerm = selectSearchTerm(state);

  return allMovies.filter((movie) =>
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
