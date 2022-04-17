import { IGetMoviePopular } from "@/domain/usecases/movies/get";
import { IMoviePopular } from "@/domain/models/movies";
import { HttpStatusCode, HttpMethod, HttpClient } from "@/data/protocols/http";
import { OverloadedError } from "@/domain/errors/server-overloaded";
import { UnexpectedError } from "@/domain/errors/enexpected-error";

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
