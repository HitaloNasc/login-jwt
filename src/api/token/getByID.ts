import knex from '../../../knex/knex';
import { Token } from './interface';

async function getByID(id: number) {
  console.log('api - token - getByID');

  const row = (await knex('token').select(['token.*']).where('token.id', id).first()) as unknown;

  return row as Token;
}

export default getByID;
