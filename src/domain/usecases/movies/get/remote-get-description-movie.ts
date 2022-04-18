import { IMovieDescription } from "@/src/domain/models/movies/IMovieDescription";

export interface IGetMovieDescription {
  exec: (param: string) => Promise<IMovieDescription>;
}
