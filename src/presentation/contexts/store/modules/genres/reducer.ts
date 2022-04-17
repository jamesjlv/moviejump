import { Reducer } from "redux";
import { GenresRedux } from "./props";

const Genres: Reducer<GenresRedux[]> = (state = [], action) => {
  switch (action.type) {
    case "ADD_GENRER_OPTIONS": {
      return action.payload;
    }
    case "SELECTED_OPTION": {
      //@ts-ignore
      let temp = state?.genrer?.map((genre) => ({
        ...genre,
        selected: genre.slug === action.payload.genrerSlug,
      }));

      return {
        genrer: temp,
      };
    }
    case "REMOVE_SELECTED_OPTION": {
      //@ts-ignore

      let temp = state?.genrer?.map((genre) => ({
        ...genre,
        selected: genre.slug === action.payload.genrerSlug && false,
      }));

      return {
        genrer: temp,
      };
    }
    default: {
      return state;
    }
  }
};

export default Genres;
