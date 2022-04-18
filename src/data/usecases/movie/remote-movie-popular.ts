import { IGetMoviePopular } from "@/src/domain/usecases/movies/get";
import { IMoviePopular } from "@/src/domain/models/movies";
import {
  HttpStatusCode,
  HttpMethod,
  HttpClient,
} from "@/src/data/protocols/http";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { UnexpectedError } from "@/src/domain/errors/enexpected-error";

export class RemoteMoviePopular implements IGetMoviePopular {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMoviePopular[]>
  ) {}

  async exec(param?: string): Promise<IMoviePopular[]> {
    const httpResponse = await this.httpGetClient.request({
      url: `${this.url}${!!param ? `?genres=${param}` : ""}`,
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMoviePopular[];
      case HttpStatusCode.serverOverload:
        throw new OverloadedError();
      default:
        throw new UnexpectedError();
    }
  }
}
