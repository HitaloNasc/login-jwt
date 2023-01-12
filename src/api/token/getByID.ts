// global
// local
// entity
import { TokenController } from '.';
import { Token } from './interface';

export async function getByID(this: TokenController, id: number) {
  console.log('api - token - getByID');

  const row = (await this.knex('token').select(['token.*']).where('token.id', id).first()) as unknown;

  return row as Token;
}
