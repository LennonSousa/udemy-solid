/* eslint-disable @typescript-eslint/naming-convention */
export interface HttpResponse {
  statusCode: number;
  body: unknown;
}

export interface HttpRequest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
}
