import { RemoteMoviePopular } from "@/data/usecases/movie/remote-movie-popular";
import { manufactureApiUrl } from "@/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/main/factories/http/http-client-factory";

export const manufactureGetRemotePopularMovies = (): RemoteMoviePopular =>
  new RemoteMoviePopular(
    manufactureApiUrl("movies/popular"),
    manufactureHttpClient()
  );
