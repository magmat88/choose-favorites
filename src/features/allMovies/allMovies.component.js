import React, { useEffect } from 'react';
import { LikeBtn } from '../../components/likeBtn/likeBtn.component';
import { Movie } from '../../components/movie/movie.component';
import { likeMovie } from '../favoriteMovies/favoriteMoviesSlice';
import { loadData, selectFilteredAllMovies } from './allMoviesSlice';
import { ReactComponent as LikeIcon } from '../../img/like.svg';
import { useDispatch, useSelector } from 'react-redux';

export const AllMovies = (props) => {
  const allMovies = useSelector(selectFilteredAllMovies);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };

  useEffect(onFirstRender, []);

  const onLikeMovieHandler = (movie) => {
    dispatch(likeMovie(movie));
  };

  // const likeIcon = <LikeIcon />;
  const likeIcon = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

  return (
    <div className="movies-container">
      {allMovies.map((movie) => (
        <Movie movie={movie} key={movie.id}>
          <LikeBtn onClickHandler={()=>onLikeMovieHandler(movie)} icon={likeIcon}>
            Add to Favorites
          </LikeBtn>
        </Movie>
      ))}
    </div>
  );
};
