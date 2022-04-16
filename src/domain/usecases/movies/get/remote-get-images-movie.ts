import { IMovieImages } from "@/domain/models/movies";

export interface IGetMovieImages {
  exec: (param?: string) => Promise<IMovieImages>;
}
