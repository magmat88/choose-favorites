import React from 'react';
import { AllMovies } from './features/allMovies/allMovies.component';
import { SearchTerm } from './features/searchTerm/searchTerm.component';
import { FavoriteMovies } from './features/favoriteMovies/favoriteMovies.component';
import './App.css';

function App() {

  return (
    <main className="App">
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Movies</h2>
        <FavoriteMovies />
      </section>
      <hr />
      <section>
        <h2>All Movies</h2>
        <AllMovies />
      </section>
    </main>
  );
}

export default App;
