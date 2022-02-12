import React from 'react';
// import { ReactComponent as ResetIcon } from '/../../img/reset.svg';
// import { ReactComponent as SearchIcon } from '/../../img/search.svg';
import { setSearchTerm, resetSearchTerm } from './searchTermSlice';

export const SearchTerm = (props) => {
  const { searchTerm, dispatch } = props;

  const onChangeSearchTermHandler = (event) => {
    const userInput = event.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onResetSerchTermHandler = () => {
    dispatch(resetSearchTerm());
  };

  // const searchIcon = <SearchIcon />;
  // const resetIcon = <ResetIcon />;

  const searchIcon = 'search icon';
  const resetIcon = 'reset icon';
  return (
    <section id="search-container">
      {searchIcon}
      <input
        id="search"
        type="text"
        value={searchTerm}
        placeholder="Search for movie genres"
        onChange={onChangeSearchTermHandler}
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onResetSerchTermHandler}
          type="button"
          id="search-clear-button"
        >
          {resetIcon}
        </button>
      )}
    </section>
  );
};
