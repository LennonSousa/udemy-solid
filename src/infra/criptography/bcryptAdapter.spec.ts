import bcrypt from "bcrypt";

import { BcryptAdapter } from "./bcryptAdapter";

jest.mock("bcrypt", () => ({
  async hash(): Promise<string> {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve("hash"));
  },
}));

const salt = 12;

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt);
};

describe("Bcrypt adapter", () => {
  test("Should call bcrypt with correct values", async () => {
    const sut = makeSut();

    const hashSpy = jest.spyOn(bcrypt, "hash");

    await sut.encrypt("any_value");
    expect(hashSpy).toHaveBeenCalledWith("any_value", salt);
  });

  test("Should returns a hash on success", async () => {
    const sut = makeSut();

    const hash = await sut.encrypt("any_value");
    expect(hash).toBe("hash");
  });

  test("Should throw if bcryt throws", async () => {
    const sut = makeSut();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.spyOn<typeof bcrypt, any>(bcrypt, "hash").mockReturnValueOnce(
      // eslint-disable-next-line no-promise-executor-return
      new Promise((_resolve, reject) => reject(new Error()))
    );

    const promise = sut.encrypt("any_value");
    expect(promise).rejects.toThrow();
  });
});
