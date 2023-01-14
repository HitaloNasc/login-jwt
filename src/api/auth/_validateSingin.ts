// global
import bcrypt from 'bcryptjs';
// local
import { Errors } from '../../common/lib/http-exeption';
import { Helper } from '../../common/lib/helper';
import { AccountModel } from '../account';
import { Account } from '../account/interface';
// entity
import { AuthModel } from '.';

export async function _validateSingin(this: AuthModel, params: { email: string; password: string }) {
  console.log('api - auth - _validateSingin');

  const { email, password } = params;

  const helper = new Helper();
  const { validateEmail, validatePassword } = helper;

  const accountModel = new AccountModel();
  const { getByEMAIL, STATUS } = accountModel;

  // check obrigatory params
  const obrigatory = ['email', 'password'];
  obrigatory.forEach((param: string) => {
    // @ts-ignore
    if (!params[param]) {
      throw Errors.UNAUTHORIZED([{ key: 'auth__is_a_obrigatory_param', data: { param } }]);
    }
  });

  // check if is valid email
  const isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    throw Errors.UNAUTHORIZED([{ key: 'auth__is_not_valid_email', data: { email } }]);
  }

  // check if is valid password
  const isValidPassword = validatePassword(password);
  if (!isValidPassword) {
    throw Errors.UNAUTHORIZED([{ key: 'auth__does_not_valid_password', data: { password } }]);
  }

  const account: Account = await getByEMAIL(email);

  // check if the account exist
  if (!account) {
    throw Errors.UNAUTHORIZED([{ key: 'auth__account_does_not_exist' }]);
  }

  // check if the account is active
  if (account.status === STATUS.INACTIVE) {
    throw Errors.UNAUTHORIZED([{ key: 'auth__inactevated_account' }]);
  }

  // check if the password is correcty
  const isSamePassword = await bcrypt.compare(password, account.password);
  if (!isSamePassword) {
    throw Errors.UNAUTHORIZED([{ key: 'auth__email_or_password_do_not_correct', data: { email, password } }]);
  }
}
