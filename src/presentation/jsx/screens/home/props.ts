import { IMoviePopular, IMovieTrending } from "@/domain/models/movies";
import { IGetMoviePopular } from "@/domain/usecases/movies/get";
import { IGetMovieGenrer } from "@/domain/usecases/movies/get/remote-get-genres-movie";
import { IGetMovieImages } from "@/domain/usecases/movies/get/remote-get-images-movie";
import { IGetMovieTrending } from "@/domain/usecases/movies/get/remote-get-trending-movie";

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
