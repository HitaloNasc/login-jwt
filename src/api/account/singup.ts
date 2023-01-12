// global
import bcrypt from 'bcryptjs';
// local
// entity
import { AccountController } from '.';
import { Account } from './interface';

export async function singup(this: AccountController, account: Account) {
  console.log('api - account - singup');

  this._validateSingup(account);

  const SALT: number = parseInt(process.env.BCRYPT!);

  account.password = await bcrypt.hash(account.password, SALT);
  account.type = this.TYPE.DEFAULT;
  account.status = this.STATUS.ACTIVE;
  account.created = new Date();
  account.updated = new Date();

  const [id] = await this.knex<Account>('account').insert(account);

  return await this.getByID(id);
}
