import { AccountModel } from "../../../domain/models/account";
import {
  AddAccount,
  AddAccountModel,
} from "../../../domain/useCases/addAccount";
import { Encrypter } from "../../protocols/encrypter";

export class DbAddAccount implements AddAccount {
  constructor(private readonly encrypter: Encrypter) {}

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password);

    return new Promise((resolve) => {
      resolve({
        id: "valid_id",
        name: account.name,
        email: account.email,
        password: account.password,
      });
    });
  }
}