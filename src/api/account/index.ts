import singin from './singin';
import singup from './singup';
import getByID from './getByID';
import getByEmail from './getByEmail';

export default class Exemple {
  singin: Function;
  singup: Function;
  getByID: Function;
  getByEmail: Function;

  constructor() {
    this.singin = singin;
    this.singup = singup;
    this.getByID = getByID;
    this.getByEmail = getByEmail;
  }
}
