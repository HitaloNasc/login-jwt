// global
// local
// entity
import { AccountModel } from '.';
import { Account } from './interface';

export async function getByID(this: AccountModel, id: number) {
  console.log('api - account - getByID');
  const row = (await this.knex('account').select(['account.*']).where('account.id', id).first()) as unknown;
  return row as Account;
}
