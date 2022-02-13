import {
  SEARCH_TERM__RESET_SEARCH_TERM,
  SEARCH_TERM__SET_SEARCH_TERM,
} from '../../app/constants/actionTypes';

export const setSearchTerm = (term) => {
  return {
    type: SEARCH_TERM__SET_SEARCH_TERM,
    payload: term,
  };
};

export const resetSearchTerm = () => {
  return {
    type: SEARCH_TERM__RESET_SEARCH_TERM,
  };
};

const initialSearchTerm = '';

export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch (action.type) {
    case SEARCH_TERM__SET_SEARCH_TERM:
      return action.payload;
    case SEARCH_TERM__RESET_SEARCH_TERM:
        return '';
    default:
        return searchTerm;
  }
};

export const selectSearchTerm = (state) => state.searchTerm;
