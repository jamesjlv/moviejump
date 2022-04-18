import { RemoteMovieImages } from "@/src/data/usecases/movie/remote-movie-images";
import { manufactureApiUrlImages } from "@/src/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/src/main/factories/http/http-client-factory";

export const manufactureGetRemoteImageMovies = (): RemoteMovieImages =>
  new RemoteMovieImages(
    manufactureApiUrlImages("movie/"),
    manufactureHttpClient()
  );
