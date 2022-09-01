import { MongoHelper } from "../helpers/mongoHelper";
import { AccountMongoRepository } from "./account";

describe("Account MongoDB repository", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL ?? "");
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test("", async () => {
    const sut = new AccountMongoRepository();

    const account = await sut.add({
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
    });

    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe("any_name");
    expect(account.email).toBe("any_email@mail.com");
    expect(account.password).toBe("any_password");
  });
});