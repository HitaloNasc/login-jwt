// global
// local
import { Errors } from '../../common/lib/http-exeption';
import { Helper } from '../../common/lib/helper';
import { AccountModel } from '../account';
import { Account } from '../account/interface';
// entity
import { AuthModel } from '.';

export async function _validateSingup(this: AuthModel, account: Account) {
  console.log('api - auth - _validateSingup');

  const helper = new Helper();
  const { validateEmail, validatePassword } = helper;

  const accountModel = new AccountModel();
  const { getByEMAIL } = accountModel;

  // check obrigatory params
  const obrigatory = ['name', 'email', 'password'];
  obrigatory.forEach((param: string) => {
    // @ts-ignore
    if (!account[param]) {
      throw Errors.PRECONDITION_FAILED([{ key: 'auth__is_a_obrigatory_param', data: { param } }]);
    }
  });

  // check if is valid email
  const isValidEmail = validateEmail(account.email);
  if (!isValidEmail) {
    throw Errors.PRECONDITION_FAILED([{ key: 'auth__is_not_valid_email', data: { email: account.email } }]);
  }

  // check if the email already exists
  const emailAlreadyExists = await getByEMAIL(account.email);

  if (emailAlreadyExists) {
    throw Errors.PRECONDITION_FAILED([{ key: 'auth__the_email_already_esists', data: { email: account.email } }]);
  }

  // check if is valid password
  const isValidPassword = validatePassword(account.password);
  if (!isValidPassword) {
    throw Errors.PRECONDITION_FAILED([{ key: 'auth__is_not_valid_password', data: { email: account.password } }]);
  }
}
