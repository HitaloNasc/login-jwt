// global
// local
import { Errors } from '../../common/lib/http-exeption';
import { Helper } from '../../common/lib/helper';
// entity
import { Account } from './interface';
import { AccountController } from '.';

export async function _validateSingup(this: AccountController, account: Account) {
  console.log('api - account - _validateCreate');

  const { validateEmail, validatePassword } = new Helper();

  // check obrigatory params
  const obrigatory = ['name', 'email', 'password'];
  obrigatory.forEach((param: string) => {
    // @ts-ignore
    if (!account[param]) {
      throw Errors.PRECONDITION_FAILED([{ key: 'account__is_a_obrigatory_param', data: { param } }]);
    }
  });

  // check if is valid email
  const isValidEmail = validateEmail(account.email);
  if (!isValidEmail) {
    throw Errors.PRECONDITION_FAILED([{ key: 'account__is_not_valid_email', data: account.email }]);
  }

  // check if the email already exists
  const emailAlreadyExists = this.getByEMAIL(account.email);
  if (emailAlreadyExists) {
    throw Errors.PRECONDITION_FAILED([{ key: 'account__the_email_already_esists', data: account.email }]);
  }

  // check if is valid password
  const isValidPassword = validatePassword(account.password);
  if (isValidPassword) {
    throw Errors.PRECONDITION_FAILED([{ key: 'account__is_not_valid_password', data: account.password }]);
  }
}
