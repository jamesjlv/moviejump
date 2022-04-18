import {
  HttpClient,
  HttpGetClientParams,
  HttpResponse,
  HttpStatusCode,
} from "@/src/data/protocols/http";

export class HttpClientSpy<T> implements HttpClient<T> {
  url?: string;
  response: HttpResponse<T> = {
    statusCode: HttpStatusCode.ok,
  };

  async request(params?: HttpGetClientParams<T>): Promise<HttpResponse<T>> {
    this.url = params?.url;
    return this.response;
  }
}
