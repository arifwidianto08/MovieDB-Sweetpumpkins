import { combineReducers } from "redux";
import { AuthActions } from "./auth/props";
import { MovieActions } from "./movie/props";
import AuthReducer from "./auth/auth";
import MoviesReducer from "./movie/movie";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";

const rootReducers = (history: History) =>
  combineReducers({
    auth: AuthReducer,
    movies: MoviesReducer,
    router: connectRouter(history)
  });

export default rootReducers;
export interface State {
  count: number;
  router: RouterState;
}
export type AppRootActions = AuthActions | MovieActions;
export type AppRootState = ReturnType<typeof rootReducers>;
