import knex from '../../../knex/knex';
import getByID from './getByID';
import { Token } from './interface';

async function create({ token, expires, accountId }: Token) {
  console.log('api - token - create');

  const [id] = await knex<Token>('token').insert({ token, expires, accountId });

  return await getByID(id);
}

export default create;
