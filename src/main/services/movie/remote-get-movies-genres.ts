import { RemoteMovieGenrer } from "@/src/data/usecases/movie/remote-movie-genrer";
import { manufactureApiUrl } from "@/src/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/src/main/factories/http/http-client-factory";

export const manufactureGetRemoteGenresMovies = (): RemoteMovieGenrer =>
  new RemoteMovieGenrer(
    manufactureApiUrl("genres/movies"),
    manufactureHttpClient()
  );
