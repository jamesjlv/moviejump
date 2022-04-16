import { IMovieGenrer } from "@/domain/models/movies";

export interface IGetMovieGenrer {
  exec: (param?: string) => Promise<IMovieGenrer[]>;
}
