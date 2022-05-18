// eslint-disable-next-line @typescript-eslint/naming-convention
export interface EmailValidator {
  isValid(email: string): boolean;
}
