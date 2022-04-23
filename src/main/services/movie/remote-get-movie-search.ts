import { RemoteSearchMovie } from "@/src/data/usecases/movie/remove-movie-search";
import { manufactureApiUrl } from "../../factories/api/api-url-factory";
import { manufactureHttpClient } from "../../factories/http/http-client-factory";

export const manufactureGetRemoteSearchMovie = (): RemoteSearchMovie =>
  new RemoteSearchMovie(
    manufactureApiUrl("search/movie"),
    manufactureHttpClient()
  );
