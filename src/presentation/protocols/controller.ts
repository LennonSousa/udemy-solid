import { HttpRequest, HttpResponse } from "./http";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse;
}
