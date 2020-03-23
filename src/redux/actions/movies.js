import * as actionTypes from "./actionTypes";

export const addMovie = movieName => {
  let newMovie = {
    title: movieName
  };
  return {
    type: actionTypes.ADDMOVIE,
    payload: newMovie
  };
};

export const deleteMovie = movie => {
  return {
    type: actionTypes.DELETEMOVIE,
    payload: movie
  };
};