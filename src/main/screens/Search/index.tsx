import React from "react";
import { SearchScreen } from "@/src/presentation/jsx/screens/search";
import { manufactureGetRemoteSearchMovie } from "../../services/movie/remote-get-movie-search";

export const manufactureSearchScreen: React.FC = () => (
  <SearchScreen getMoviesFiltered={manufactureGetRemoteSearchMovie()} />
);
