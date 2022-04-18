import { IMovieTrending } from "@/src/domain/models/movies";

export interface IGetMovieTrending {
  exec: (param?: string) => Promise<IMovieTrending[]>;
}
