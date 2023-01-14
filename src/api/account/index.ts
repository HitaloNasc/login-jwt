// global
// local
import { BaseModel } from '../base-model';
// entity
import { getByID } from './getByID';
import { getByEMAIL } from './getByEMAIL';
import { create } from './create';

export class AccountModel extends BaseModel {
  public getByID: Function;
  public getByEMAIL: Function;
  public create: Function;

  public STATUS = {
    ACTIVE: 1,
    INACTIVE: 0,
  };

  public TYPE = {
    DEFAULT: 1,
  };

  constructor() {
    super();
    this.getByID = getByID.bind(this);
    this.getByEMAIL = getByEMAIL.bind(this);
    this.create = create.bind(this);
  }
}
