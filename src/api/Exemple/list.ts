import { Errors } from '../../common/lib/http-exeption';
import { Exemple } from './interface';
import knex from '../../../knex/knex';

async function list() {
  console.log('api - exemple - list');

  // const rows = knex<Exemple>('exemple').select(['id', 'name', 'description']);
  const query = knex.from('exemple').select(['exemple.*']);

  const rows = await query;

  return rows;
  // throw Errors.INTERNAL_SERVER_ERROR()
}

export default list;
