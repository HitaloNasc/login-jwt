// global
import bcrypt from 'bcryptjs';
// local
import { AccountModel } from '../account';
import { Account } from '../account/interface';
// entity
import { AuthModel } from '.';

export async function singup(this: AuthModel, account: Account) {
  console.log('api - auth - singup');

  const accountModel = new AccountModel();
  const { STATUS, TYPE } = accountModel;

  await this._validateSingup(account);

  const SALT: number = parseInt(process.env.BCRYPT!);
  account.password = await bcrypt.hash(account.password, SALT);
  account.type = TYPE.DEFAULT;
  account.status = STATUS.ACTIVE;
  account.created = new Date();
  account.updated = new Date();

  const accountCreated = await accountModel.create(account);

  return { name: accountCreated.name, email: accountCreated.email, type: accountCreated.type };
}
