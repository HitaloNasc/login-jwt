import knex from '../../common/knex';
import { Account } from './interface';

async function getByID(id: number) {
  console.log('api - account - getByID');

  const query = knex<Account>('account').select(['account.*']).where('account.id', '=', id);
  const [row] = await query;

  return row;
}

export default getByID;
