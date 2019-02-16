export const movieUrl = (page: number): string => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${
    process.env.REACT_APP_TMDB_API_KEY
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
};

export const genresURL: string = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
  process.env.REACT_APP_TMDB_API_KEY
}&language=en-US`;
