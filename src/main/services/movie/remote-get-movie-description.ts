import { RemoteMovieDescription } from "@/src/data/usecases/movie/remote-movie-description";
import { manufactureApiUrl } from "@/src/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/src/main/factories/http/http-client-factory";

export const manufactureGetRemoteDescriptionMovies =
  (): RemoteMovieDescription =>
    new RemoteMovieDescription(
      manufactureApiUrl("movies/"),
      manufactureHttpClient()
    );
