// global
// local
import { BaseModel } from '../base-model';
// entity
import { create } from './create';
import { getByID } from './getByID';

export class TokenModel extends BaseModel {
  public create: Function;
  public getByID: Function;

  constructor() {
    super();
    this.create = create.bind(this);
    this.getByID = getByID.bind(this);
  }
}
