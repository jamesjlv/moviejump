import { RemoteMovieGenrer } from "@/data/usecases/movie/remote-movie-genrer";
import { manufactureApiUrl } from "@/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/main/factories/http/http-client-factory";

export const manufactureGetRemoteGenresMovies = (): RemoteMovieGenrer =>
  new RemoteMovieGenrer(
    manufactureApiUrl("genres/movies"),
    manufactureHttpClient()
  );
