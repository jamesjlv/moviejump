import { IMovieSearch } from "@/src/domain/models/movies";

export interface IGetSearchMovies {
  exec(params: string): Promise<IMovieSearch[]>;
}
