import React from "react";
import { manufactureGetRemoteImageMovies } from "@/main/services/movie/remote-get-movie-image";
import { Movie } from "@/presentation/jsx/screens/movie";
import { manufactureGetRemoteDescriptionMovies } from "@/main/services/movie/remote-get-movie-description";

export const ManufactureMovieScreen: React.FC = () => (
  <Movie
    getMovieImage={manufactureGetRemoteImageMovies()}
    getMovieInfo={manufactureGetRemoteDescriptionMovies()}
  />
);
