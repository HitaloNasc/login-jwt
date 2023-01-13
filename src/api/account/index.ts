// global
import { Knex } from 'knex';
// local
// entity
import { _validateSingup } from './_validateSingup';
import { singup } from './singup';
import { singin } from './singin';
import { getByID } from './getByID';
import { getByEMAIL } from './getByEMAIL';
import { BaseController } from '../base-controller';

export class AccountController extends BaseController {
  // protected knex: Knex;
  protected _validateSingup: Function;
  public singup: Function;
  public singin: Function;
  public getByID: Function;
  public getByEMAIL: Function;

  protected STATUS = {
    ACTIVE: 1,
    INACTIVE: 0,
  };

  protected TYPE = {
    DEFAULT: 1,
  };

  constructor(/* knex: Knex */) {
    // this.knex = knex;
    super();
    this._validateSingup = _validateSingup.bind(this);
    this.singup = singup.bind(this);
    this.singin = singin.bind(this);
    this.getByID = getByID.bind(this);
    this.getByEMAIL = getByEMAIL.bind(this);
  }
}
