// global
import { Knex } from 'knex';
// local
import knex from '../../knex/knex';

export class BaseController {
  protected knex = knex;
}
