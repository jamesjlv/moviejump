import { IMovieGenrer } from "@/domain/models/movies";

export interface GenresRedux extends IMovieGenrer {
  selected: boolean;
}
