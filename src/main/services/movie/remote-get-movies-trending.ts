import { RemoteMovieTrending } from "@/src/data/usecases/movie/remote-movie-trending";
import { manufactureApiUrl } from "@/src/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/src/main/factories/http/http-client-factory";

export const manufactureGetRemoteTrendingMovies = (): RemoteMovieTrending =>
  new RemoteMovieTrending(
    manufactureApiUrl("movies/trending"),
    manufactureHttpClient()
  );
