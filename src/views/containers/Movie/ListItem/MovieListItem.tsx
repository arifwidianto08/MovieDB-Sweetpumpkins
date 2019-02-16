import React from "react";
import "../../../../assets/style/MovieListItem.css";

const MovieListItem = ({ movies }: any) => {
  const { title, poster_path, release_date, vote_average } = movies;
  const imgUrl: string = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <li className="movie-item">
      <img src={imgUrl} alt={title} />
      <div className="movie-description">
        <h3>{title}</h3>
        <section className="movie-details">
          <div className="movie-year">
            <span className="title">Release Date</span>
            <span>{release_date}</span>
          </div>
          <div className="movie-rating">
            <span className="title">Rating</span>
            <span>{vote_average}</span>
          </div>
        </section>
      </div>
    </li>
  );
};

export default MovieListItem;
