import { badRequest } from "../helpers/httpHelpers";
import { Controller } from "../protocols/controller";
import { MissingParamError } from "../protocols/errors/missingParamError";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];

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
