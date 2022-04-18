import { IMoviePopular } from "@/src/domain/models/movies";

export interface IGetMoviePopular {
  exec: (param?: string) => Promise<IMoviePopular[]>;
}
