// eslint-disable-next-line @typescript-eslint/naming-convention
export interface Encrypter {
  encrypt(value: string): Promise<string>;
}
