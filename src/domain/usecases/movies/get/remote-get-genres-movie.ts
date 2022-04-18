import { IMovieGenrer } from "@/src/domain/models/movies";

export interface IGetMovieGenrer {
  exec: (param?: string) => Promise<IMovieGenrer[]>;
}
