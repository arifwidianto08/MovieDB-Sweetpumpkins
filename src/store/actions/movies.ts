import { AppThunkAction } from "..";
import axios from "axios";
import { async } from "q";

export function getMovies(apiUrl: string): AppThunkAction {
  return async dispatch => {
    const response = await axios.get(apiUrl);
    const data = response.data;
    try {
      dispatch({ type: "MOVIES/GET_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "MOVIES/GET_DATA_ERROR", payload: [] });
    }
    return data;
  };
}

export function getGenres(genresApi: string): AppThunkAction {
  return async dispatch => {
    const response = await axios.get(genresApi);
    const genresData = response.data;
    try {
      dispatch({ type: "GENRES/GET_DATA", payload: genresData });
    } catch (error) {
      dispatch({ type: "GENRES/GET_DATA_ERROR", payload: [] });
    }
  };
}
