import { IMovieGenrer } from "@/domain/models/movies";

export function handleAddGenrer(genrer: IMovieGenrer[]) {
  return {
    type: "ADD_GENRER_OPTIONS",
    payload: {
      genrer,
    },
  };
}
