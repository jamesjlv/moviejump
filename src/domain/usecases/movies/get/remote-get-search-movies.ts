import { IMovieSearch } from "@/src/domain/models/movies";

export interface IGetMovieSearch {
  exec(params: string): Promise<IMovieSearch[]>;
}
