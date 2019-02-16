// Defining State Type
export interface MovieState {
  movies?: object[];
  isErrors?: any;
  genres?: object[];
}
// Defining Action Type
export type MovieActions =
  | {
      type: "MOVIES/GET_DATA";
      payload: any;
    }
  | {
      type: "MOVIES/GET_DATA_ERROR";
      payload: any;
    }
  | {
      type: "MOVIES/POST_DATA";
      payload?: any;
    }
  | {
      type: "MOVIES/POST_DATA_ERROR";
      payload?: any;
    }
  | {
      type: "MOVIES/EDIT_DATA";
      payload?: any;
    }
  | {
      type: "MOVIES/EDIT_DATA_ERROR";
      payload?: any;
    }
  | {
      type: "GENRES/GET_DATA";
      payload?: any;
    }
  | {
      type: "GENRES/GET_DATA_ERROR";
      payload?: any;
    }
  | {
      type: "SET_TO_DEFAULT";
      payload?: any;
    };
