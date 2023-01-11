import knex from '../../../knex/knex';
import { Account } from './interface';

async function getByID(id: number) /* : Promise<Account> */ {
  console.log('api - account - getByID');

  const row = (await knex('account').select(['account.*']).where('account.id', id).first()) as unknown;

  return row as Account;
}

export default getByID;
