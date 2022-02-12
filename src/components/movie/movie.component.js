import React from 'react';

export const Movie = ({ movie, children }) => {

  return (
    <article key={movie.id} tabIndex={0} className="movie">
      <span className="movie-container">
        <h1 className="movie-name">{movie.genre}</h1>
        <figure className="image-container">
          <img src={movie.img} alt={`${movie.genre} movie`} className="movie-image" />
        </figure>
      </span>
      {children}
    </article>
  );
};
