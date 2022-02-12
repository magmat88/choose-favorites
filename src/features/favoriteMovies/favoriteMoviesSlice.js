import {
  FAVORITE_MOVIES__DISLIKE_MOVIE,
  FAVORITE_MOVIES__LIKE_MOVIE,
} from '../../app/constants/actionTypes';

export const likeMovie = (movie) => {
  return {
    type: FAVORITE_MOVIES__LIKE_MOVIE,
    payload: movie,
  };
};

export const dislikeMovie = (movie) => {
  return {
    type: FAVORITE_MOVIES__DISLIKE_MOVIE,
    payload: movie,
  };
};

const initialFavoriteMovies = [];

export const favoriteMoviesReducer = (
  favoriteMovies = initialFavoriteMovies,
  action
) => {
  switch (action.type) {
    case FAVORITE_MOVIES__LIKE_MOVIE:
      return [...favoriteMovies, action.payload];
    case FAVORITE_MOVIES__DISLIKE_MOVIE:
      return favoriteMovies.filter((movie) => {
        return movie.id !== action.payload.id;
      });
    default:
      return favoriteMovies;
  }
};
