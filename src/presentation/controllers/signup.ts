import { badRequest } from "../helpers/httpHelpers";
import { MissingParamError } from "../protocols/errors/missingParamError";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name)
      return badRequest(new MissingParamError("name"));

    return badRequest(new MissingParamError("email"));
  }
}
