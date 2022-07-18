import { AccountModel } from "../../domain/models/account";
import { AddAccountModel } from "../../domain/useCases/addAccount";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface AddAccountRepository {
  add(account: AddAccountModel): Promise<AccountModel>;
}
