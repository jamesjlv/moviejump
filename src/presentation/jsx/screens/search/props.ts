import { IMovieSearch } from "@/src/domain/models/movies";
import {
  IGetMovieImages,
  IGetMovieSearch,
} from "@/src/domain/usecases/movies/get";

export interface SearchScreenProps {
  getMoviesFiltered: IGetMovieSearch;
  getMovieImage: IGetMovieImages;
}

export type RouteProps = { params: { filter: string } };

export interface MovieProps extends IMovieSearch {
  imagePath: string;
}
