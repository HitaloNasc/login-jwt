// global
import bcrypt from 'bcryptjs';
// local
import knex from '../../../knex/knex';
// entity
import { Account } from './interface';
import { _validateCreate } from './_validate-create';
import ACCOUNT from './cosnts';
import getByID from './getByID';

async function singup(account: Account) {
  console.log('api - account - singup');

  _validateCreate(account);

  const SALT: number = parseInt(process.env.BCRYPT!);

  account.password = await bcrypt.hash(account.password, SALT);
  account.type = ACCOUNT.TYPE.DEFAULT;
  account.status = ACCOUNT.STATUS.ACTIVE;
  account.created = new Date();
  account.updated = new Date();

  const [id] = await knex<Account>('account').insert(account);

  return await getByID(id);
}

export default singup;
