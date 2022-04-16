import { RemoteMovieDescription } from "@/data/usecases/movie/remote-movie-description";
import { manufactureApiUrl } from "@/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/main/factories/http/http-client-factory";

export const manufactureGetRemoteDescriptionMovies =
  (): RemoteMovieDescription =>
    new RemoteMovieDescription(
      manufactureApiUrl("movies/"),
      manufactureHttpClient()
    );
