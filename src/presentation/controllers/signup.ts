import { badRequest } from "../helpers/httpHelpers";
import { MissingParamError } from "../protocols/errors/missingParamError";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ["name", "email", "password"];

    // eslint-disable-next-line no-restricted-syntax
    for (const field of requiredFields) {
      if (!httpRequest.body[field])
        return badRequest(new MissingParamError(field));
    }

    return {
      statusCode: 200,
      body: null,
    };
  }
}
