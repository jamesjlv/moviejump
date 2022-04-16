import { RemoteMovieImages } from "@/data/usecases/movie/remote-movie-images";
import { manufactureApiUrlImages } from "@/main/factories/api/api-url-factory";
import { manufactureHttpClient } from "@/main/factories/http/http-client-factory";

export const manufactureGetRemoteImageMovies = (): RemoteMovieImages =>
  new RemoteMovieImages(
    manufactureApiUrlImages("movie/"),
    manufactureHttpClient()
  );
