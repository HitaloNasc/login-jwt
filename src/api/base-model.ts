// global
// local
import knex from '../../knex/knex';

export class BaseModel {
  protected knex = knex;
}
