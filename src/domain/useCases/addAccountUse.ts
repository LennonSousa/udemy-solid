/* eslint-disable @typescript-eslint/naming-convention */
import { AccountModel } from "../models/account";

export interface AddAccountModel {
  name: string;
  email: string;
  password: string;
}

export interface AddAccount {
  add(account: AddAccountModel): Promise<AccountModel>;
}
