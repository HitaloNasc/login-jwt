// global
// local
// entity
import { AccountModel } from '.';
import { Account } from './interface';

export async function getByEMAIL(this: AccountModel, email: string) {
  console.log('api - account - getByEmail');
  const row = (await this.knex<Account>('account').select(['account.*']).where('account.email', email).first()) as unknown;
  return row as Account;
}
