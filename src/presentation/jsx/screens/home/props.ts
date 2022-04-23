import { IMoviePopular, IMovieTrending } from "@/src/domain/models/movies";
import {
  IGetMovieGenrer,
  IGetMovieImages,
  IGetMoviePopular,
  IGetMovieTrending,
} from "@/src/domain/usecases/movies/get";

export interface HomeProps {
  getAllPopularMovies: IGetMoviePopular;
  getAllTrendingMovies: IGetMovieTrending;
  getAllGenres: IGetMovieGenrer;
  getMovieImage: IGetMovieImages;
}

export interface TrendingProps extends IMovieTrending {
  imagePath: string;
}
export interface PopularProps extends IMoviePopular {
  imagePath: string;
}
