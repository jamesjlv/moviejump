import { IMovieImages } from "@/src/domain/models/movies";

export interface IGetMovieImages {
  exec: (param?: string) => Promise<IMovieImages>;
}
