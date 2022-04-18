import { RemoteMoviePopular } from "@/src/data/usecases/movie/remote-movie-popular";
import { manufactureApiUrl } from "@/src/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/src/main/factories/http/http-client-factory";

export const manufactureGetRemotePopularMovies = (): RemoteMoviePopular =>
  new RemoteMoviePopular(
    manufactureApiUrl("movies/popular"),
    manufactureHttpClient()
  );
