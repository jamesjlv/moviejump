import { GenresRedux } from "./props";

export function handleAddGenrer(genrer: GenresRedux[]) {
  return {
    type: "ADD_GENRER_OPTIONS",
    payload: {
      genrer,
    },
  };
}
export function handleSelectGenrer(genrerSlug: string) {
  return {
    type: "SELECTED_OPTION",
    payload: {
      genrerSlug,
    },
  };
}
export function handleRemoveSelectedGenrer(genrerSlug: string) {
  return {
    type: "REMOVE_SELECTED_OPTION",
    payload: {
      genrerSlug,
    },
  };
}
