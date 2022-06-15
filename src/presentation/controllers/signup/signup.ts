import { InvalidParamError, MissingParamError } from "../../errors";
import { badRequest, serverError } from "../../helpers/httpHelpers";
import {
  AddAccount,
  Controller,
  EmailValidator,
  HttpRequest,
  HttpResponse,
} from "./signupProtocols";

export class SignUpController implements Controller {
  constructor(
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount
  ) {}

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = [
        "name",
        "email",
        "password",
        "passwordConfirmation",
      ];

      const { name, email, password, passwordConfirmation } = httpRequest.body;

      // eslint-disable-next-line no-restricted-syntax
      for (const field of requiredFields) {
        if (!httpRequest.body[field])
          return badRequest(new MissingParamError(field));
      }

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError("passwordConfirmation"));
      }

      const isValidEmail = this.emailValidator.isValid(email);

      if (!isValidEmail) return badRequest(new InvalidParamError("email"));

      this.addAccount.add({
        name,
        email,
        password,
      });

      return {
        statusCode: 200,
        body: null,
      };
    } catch (error) {
      return serverError();
    }
  }
}