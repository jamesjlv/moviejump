import { IMovieGenrer } from "@/src/domain/models/movies";

export interface GenresRedux extends IMovieGenrer {
  selected: boolean;
}
