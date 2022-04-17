import { IMovieGenrer } from "@/domain/models/movies";
import { Reducer } from "redux";

const Genres: Reducer<IMovieGenrer[]> = (state = [], action) => {
  switch (action.type) {
    case "ADD_GENRER_OPTIONS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default Genres;
