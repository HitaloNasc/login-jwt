// global
// local
import { BaseModel } from '../base-model';
// entity
import { _validateSingin } from './_validateSingin';
import { _validateSingup } from './_validateSingup';
import { singin } from './singin';
import { singup } from './singup';

export class AuthModel extends BaseModel {
  protected _validateSingin: Function;
  protected _validateSingup: Function;
  public singin: Function;
  public singup: Function;
  
  constructor() {
    super();
    this._validateSingin = _validateSingin.bind(this);
    this._validateSingup = _validateSingup.bind(this);
    this.singin = singin.bind(this);
    this.singup = singup.bind(this);
  }
}
