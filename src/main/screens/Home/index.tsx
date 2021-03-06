import React from "react";
import { Home } from "@/src/presentation/jsx/screens/home";
import { manufactureGetRemotePopularMovies } from "../../services/movie/remote-get-movies-popular";
import { manufactureGetRemoteTrendingMovies } from "@/src/main/services/movie/remote-get-movies-trending";
import { manufactureGetRemoteGenresMovies } from "@/src/main/services/movie/remote-get-movies-genres";
import { manufactureGetRemoteImageMovies } from "@/src/main/services/movie/remote-get-movie-image";

export const ManufactureHomeScreen: React.FC = () => (
  <Home
    getAllPopularMovies={manufactureGetRemotePopularMovies()}
    getAllTrendingMovies={manufactureGetRemoteTrendingMovies()}
    getAllGenres={manufactureGetRemoteGenresMovies()}
    getMovieImage={manufactureGetRemoteImageMovies()}
  />
);
