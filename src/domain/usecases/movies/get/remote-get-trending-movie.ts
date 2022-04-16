import { IMovieTrending } from "@/domain/models/movies";

export interface IGetMovieTrending {
  exec: (param?: string) => Promise<IMovieTrending[]>;
}
