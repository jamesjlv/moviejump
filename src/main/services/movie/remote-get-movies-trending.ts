import { RemoteMovieTrending } from "@/data/usecases/movie/remote-movie-trending";
import { manufactureApiUrl } from "@/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/main/factories/http/http-client-factory";

export const manufactureGetRemoteTrendingMovies = (): RemoteMovieTrending =>
  new RemoteMovieTrending(
    manufactureApiUrl("movies/trending"),
    manufactureHttpClient()
  );
