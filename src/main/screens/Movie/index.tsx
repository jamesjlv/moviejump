import React from "react";
import { manufactureGetRemoteImageMovies } from "@/src/main/services/movie/remote-get-movie-image";
import { Movie } from "@/src/presentation/jsx/screens/movie";
import { manufactureGetRemoteDescriptionMovies } from "@/src/main/services/movie/remote-get-movie-description";

export const ManufactureMovieScreen: React.FC = () => (
  <Movie
    getMovieImage={manufactureGetRemoteImageMovies()}
    getMovieInfo={manufactureGetRemoteDescriptionMovies()}
  />
);
