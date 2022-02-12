import React from 'react';
import { AllMovies } from './features/allMovies/allMovies.component';
import { SearchTerm } from './features/searchTerm/searchTerm.component';
import { FavoriteMovies } from './features/favoriteMovies/favoriteMovies.component';
// import { allMoviesData } from './data';
import './App.css';

function App(props) {
  const { state, dispatch } = props;

  function getFilteredMovies(movies, searchTerm) {
    return movies.filter((movie) =>
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const visibleAllMovies = getFilteredMovies(state.allMovies, state.searchTerm);
  const visibleFavoriteMovies = getFilteredMovies(state.favoriteMovies, state.searchTerm);
    
  return (
    <main className="App">
      <section>
        <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      </section>
      <section>
        <h2>Favorite Movies</h2>
        <FavoriteMovies
          favoriteMovies={visibleFavoriteMovies}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Movies</h2>
        <AllMovies
          allMovies={visibleAllMovies} 
          dispatch={dispatch}
        />
      </section>
    </main>
  );
}

export default App;
