import React from 'react';
import { ReactComponent as DislikeIcon } from '../../img/dislike.svg';
import { LikeBtn } from '../../components/likeBtn/likeBtn.component';
import { Movie } from '../../components/movie/movie.component';
import { dislikeMovie, selectFilteredFavoriteMovies } from '../favoriteMovies/favoriteMoviesSlice';
import { useSelector, useDispatch } from 'react-redux';

export const FavoriteMovies = () => {
    const favoriteMovies = useSelector(selectFilteredFavoriteMovies);
    const dispatch = useDispatch();


    const onDislikeMovieHandler = (movie) => {
        dispatch(dislikeMovie(movie));
    }

    // const dislikeIcon = <DislikeIcon />;
    const dislikeIcon = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";


    function createMovieComponentHelper(movie) {
        return (
            <Movie movie={movie} key={movie.id}>
                <LikeBtn onClickHandler={()=>onDislikeMovieHandler(movie)} icon={dislikeIcon}>
                    {/* {dislikeIcon} */}
                    Remove from Favorites
                </LikeBtn>
            </Movie>
        );
    }

    return (
        <section className="movies-container">
            {favoriteMovies.map(createMovieComponentHelper)}
        </section>
    );
}
