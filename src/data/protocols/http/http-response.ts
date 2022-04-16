export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 204,
  badRequest = 400,
  ok = 200,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export interface HttpClient<R = any> {
  request: ({
    method,
    url,
    body,
    headers,
  }: HttpRequest) => Promise<HttpResponse<R>>;
}

export enum HttpMethod {
  Post = "post",
  Get = "get",
  Patch = "patch",
  Put = "put",
  Delete = "delete",
}

export type HttpGetClientParams<T> = {
  url: string;
  body?: T;
};

export interface HttpGetClient<T, R> {
  get(params?: HttpGetClientParams<T>): Promise<HttpResponse<R>>;
}
