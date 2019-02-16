import React, { useEffect, useState } from "react";
import MovieListItem from "./ListItem";
import { movieUrl } from "../../../config/apiUrl";
import { getMovies } from "../../../store/actions/movies";
import { connect } from "react-redux";
import { MovieProps } from "./props";
import "../../../assets/style/Movie.css";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Movies = (props: MovieProps & RouteComponentProps) => {
  const [moviePages, setPages] = useState(
    props.match.params.id ? props.match.params.id : 1
  );
  useEffect(() => {
    props.getMovies(movieUrl(moviePages));
  }, [moviePages]);
  const changePages = () => {
    setPages(moviePages + 1);
    props.history.push(`/${moviePages + 1}`);
  };
  const { movies } = props;

  return (
    <>
      <button onClick={changePages}>Change Page</button>
      <section>
        <ul className="movies">
          {movies &&
            movies.results &&
            movies.results.map((movie: any) => {
              return <MovieListItem key={movie.id} movies={movie} />;
            })}
        </ul>
      </section>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movies: state.movies.movies
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMovies: (uri: string) => dispatch(getMovies(uri))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movies)
);
