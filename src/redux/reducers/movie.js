import * as actionTypes from "../actions/actionTypes";

const initialState = {
    moviesList: [],
    input: ""
  };

  const movie = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADDMOVIE:
        return {
          ...state,
          moviesList: state.moviesList.concat(action.payload)
        };
      case actionTypes.DELETEMOVIE:
        let filteredList = state.moviesList.filter(
          movie => action.payload !== movie
        );
  
        return {
          ...state,
          moviesList: filteredList
        };
      default:
        return state;
    }
  };
  
  export default movie;