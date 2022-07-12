import { DbAddAccount } from "./dbAddAccount";

class EncrypterStub {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async encrypt(_value: string): Promise<string> {
    return new Promise((resolve) => {
      resolve("hashed_password");
    });
  }
}

describe("DbAddAccount UseCase", () => {
  test("Should call Encrypter with correct password", async () => {
    const encrypterStub = new EncrypterStub();
    const sut = new DbAddAccount(encrypterStub);
    const encryptSpy = jest.spyOn(encrypterStub, "encrypt");

    const accountData = {
      name: "valid_name",
      email: "valid_email",
      password: "valid_password",
    };

    await sut.add(accountData);

    expect(encryptSpy).toHaveBeenCalledWith("valid_password");
  });
});
