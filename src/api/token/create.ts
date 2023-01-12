// global
// local
// entity
import { TokenController } from '.';
import { Token } from './interface';

export async function create(this: TokenController, { token, expires, accountId }: Token) {
  console.log('api - token - create');

  const [id] = await this.knex<Token>('token').insert({ token, expires, accountId });

  return await this.getByID(id);
}
