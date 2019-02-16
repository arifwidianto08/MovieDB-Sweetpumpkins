import React, { useState, useEffect } from "react";
import "../../../assets/style/Selection.css";
import { genresURL } from "../../../config/apiUrl";
import { connect } from "react-redux";
import { getGenres } from "../../../store/actions/movies";
import { SelectionProps } from "./props";

const Selection = (props: SelectionProps) => {
  const [genre, setGenre] = useState("comedy");
  useEffect(() => {
    props.getGenres(genresURL);
  }, []);

  const { genres } = props;
  return (
    <div className="selection">
      <label>Genre</label>
      <select
        value={genre}
        onChange={e => {
          setGenre(e.target.value);
        }}
      >
        {genres &&
          genres.map((genre: any) => (
            <option value={genre.name} key={genre.id}>
              {genre.name}
            </option>
          ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    genres: state.movies.genres.genres
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getGenres: (apiUrl: string) => dispatch(getGenres(apiUrl))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection);
