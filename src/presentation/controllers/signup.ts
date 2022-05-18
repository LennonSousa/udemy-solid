import { MissingParamError } from "../protocols/errors/missingParamError";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name)
      return {
        statusCode: 400,
        body: new MissingParamError("name"),
      };

    return {
      statusCode: 400,
      body: new MissingParamError("email"),
    };
  }
}
