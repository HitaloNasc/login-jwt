// global
import { Knex } from 'knex';
// local
// entity
import { create } from './create';
import { getByID } from './getByID';

export class TokenController {
  protected knex: Knex;
  public create: Function;
  public getByID: Function;

  constructor(knex: Knex) {
    this.knex = knex;
    this.create = create.bind(this);
    this.getByID = getByID.bind(this);
  }
}
