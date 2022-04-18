import { IMoviePopular, IMovieTrending } from "@/src/domain/models/movies";
import { IGetMoviePopular } from "@/src/domain/usecases/movies/get";
import { IGetMovieGenrer } from "@/src/domain/usecases/movies/get/remote-get-genres-movie";
import { IGetMovieImages } from "@/src/domain/usecases/movies/get/remote-get-images-movie";
import { IGetMovieTrending } from "@/src/domain/usecases/movies/get/remote-get-trending-movie";

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
