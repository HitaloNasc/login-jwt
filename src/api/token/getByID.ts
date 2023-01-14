// global
// local
// entity
import { TokenModel } from '.';
import { Token } from './interface';

export async function getByID(this: TokenModel, id: number) {
  console.log('api - token - getByID');
  const row = (await this.knex('token').select(['token.*']).where('token.id', id).first()) as unknown;
  return row as Token;
}
