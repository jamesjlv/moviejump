import { AxiosHttpClient } from "@/src/infra/http";

export const manufactureHttpClient = (): AxiosHttpClient =>
  new AxiosHttpClient();
