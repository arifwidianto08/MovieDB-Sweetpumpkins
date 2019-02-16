import { Reducer } from "redux";
import { MovieState, MovieActions } from "./props";

const MoviesReducer: Reducer<MovieState, MovieActions> = (
  state = {
    movies: [],
    genres: [],
    isErrors: undefined
  },
  action
) => {
  switch (action.type) {
    case "MOVIES/GET_DATA":
      return {
        ...state,
        movies: action.payload,
        isErrors: undefined
      };
    case "MOVIES/GET_DATA_ERROR":
      return {
        ...state,
        movies: [],
        isErrors: "Get Data Failed"
      };
    case "MOVIES/POST_DATA":
      return {
        ...state,
        movies: undefined,
        isErrors: undefined
      };
    case "MOVIES/POST_DATA_ERROR":
      return {
        ...state,
        movies: undefined,
        isErrors: "Error sending data"
      };
    case "MOVIES/EDIT_DATA":
      return {
        ...state,
        movies: undefined,
        isErrors: undefined
      };
    case "MOVIES/EDIT_DATA_ERROR":
      return {
        ...state,
        movies: undefined,
        isErrors: "Edit Data Error"
      };

    case "GENRES/GET_DATA":
      return {
        ...state,
        genres: action.payload
      };
    case "GENRES/GET_DATA_ERROR":
      return {
        ...state,
        genres: [],
        isErrors: "Get Genres Error"
      };

    case "SET_TO_DEFAULT":
      return {
        movies: undefined,
        isErrors: undefined
      };

    default:
      return state;
  }
};

export default MoviesReducer;
