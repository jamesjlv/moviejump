import React from "react";
import { manufactureGetRemoteImageMovies } from "@/main/services/movie/remote-get-movie-image";
import { Movie } from "@/presentation/jsx/screens/movie";

export const ManufactureMovieScreen: React.FC = () => (
  <Movie getMovieImage={manufactureGetRemoteImageMovies()} />
);
