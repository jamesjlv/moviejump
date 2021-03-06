import { IGetMovieTrending } from "@/src/domain/usecases/movies/get/remote-get-trending-movie";
import { IMovieTrending } from "@/src/domain/models/movies";
import {
  HttpStatusCode,
  HttpMethod,
  HttpClient,
} from "@/src/data/protocols/http";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { UnexpectedError } from "@/src/domain/errors/enexpected-error";

export class RemoteMovieTrending implements IGetMovieTrending {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieTrending[]>
  ) {}

  async exec(param?: string): Promise<IMovieTrending[]> {
    const httpResponse = await this.httpGetClient.request({
      url: `${this.url}${!!param ? `?genres=${param}` : ""}`,
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMovieTrending[];
      case HttpStatusCode.serverOverload:
        throw new OverloadedError();
      default:
        throw new UnexpectedError();
    }
  }
}
