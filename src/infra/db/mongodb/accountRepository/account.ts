import { AddAccountRepository } from "../../../../data/protocols/addAccountRepository";
import { AccountModel } from "../../../../domain/models/account";
import { AddAccountModel } from "../../../../domain/useCases/addAccount";
import { MongoHelper } from "../helpers/mongoHelper";

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection("accounts");

    const result = await accountCollection.insertOne(accountData, {});

    const account = await accountCollection.findOne({ _id: result.insertedId });

    if (!account) throw new Error();

    const accountWithoutId: AccountModel = {
      // eslint-disable-next-line no-underscore-dangle
      id: account._id.id.toString(),
      name: account.name,
      email: account.email,
      password: account.password,
    };

    return accountWithoutId;
  }
}
