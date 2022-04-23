import React from "react";
import { SearchScreen } from "@/src/presentation/jsx/screens/search";
import { manufactureGetRemoteSearchMovie } from "../../services/movie/remote-get-movie-search";
import { manufactureGetRemoteImageMovies } from "../../services/movie/remote-get-movie-image";

export const ManufactureSearchScreen: React.FC = () => (
  <SearchScreen
    getMoviesFiltered={manufactureGetRemoteSearchMovie()}
    getMovieImage={manufactureGetRemoteImageMovies()}
  />
);
