import { AxiosHttpClient } from "@/infra/http";

export const manufactureHttpClient = (): AxiosHttpClient =>
  new AxiosHttpClient();
