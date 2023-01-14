// global
// local
// entity
import { AccountModel } from '.';
import { Account } from './interface';

export async function create(this: AccountModel, account: Account) {
  console.log('api - account - create');
  console.log(account);
  const [id] = await this.knex<Account>('account').insert(account);
  const created = await this.getByID(id);
  return created;
}
