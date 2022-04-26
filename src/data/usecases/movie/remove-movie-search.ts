import { UnexpectedError } from "@/src/domain/errors/enexpected-error";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { IMovieSearch } from "@/src/domain/models/movies";
import { IGetMovieSearch } from "@/src/domain/usecases/movies/get";
import { HttpClient, HttpMethod, HttpStatusCode } from "../../protocols/http";

export class RemoteSearchMovie implements IGetMovieSearch {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieSearch[]>
  ) {}

  async exec(params: string): Promise<IMovieSearch[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url + `?query=${params}&fields=title`,
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMovieSearch[];
      case HttpStatusCode.serverOverload:
        throw new OverloadedError();
      default:
        throw new UnexpectedError();
    }
  }
}
