export interface MovieProps {
  movies: {
    results: any;
  };
  match: {
    params: {
      id: number;
    };
  };
  getMovies: (uri: string) => void;
}
