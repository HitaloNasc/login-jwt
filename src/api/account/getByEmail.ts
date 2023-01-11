import knex from '../../../knex/knex';
import { Account } from './interface';

async function getByEmail(email: string) {
  console.log('api - account - getByEmail');

  const row = (await knex<Account>('account').select(['account.*']).where('account.email', email).first()) as unknown;

  return row as Account;
}

export default getByEmail;
