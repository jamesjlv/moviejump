export interface IMovieDescription {
  title: string;
  year: number;
  ids: {
    trakt: number;
    slug: string;
    imdb: string;
    tmdb: number;
  };
  tagline: string;
  overview: string;
  released: string;
  runtime: number;
  country: string;
  trailer: string;
  homepage: string;
  status: string;
  rating: number;
  votes: number;
  comment_count: number;
  updated_at: string;
  language: string;
  available_translations: string[];
  genres: string[];
  certification: string;
}
