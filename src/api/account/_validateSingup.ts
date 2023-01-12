// global
// local
import { Errors } from '../../common/lib/http-exeption';
// entity
import { Account } from './interface';
import { AccountController } from '.';

export async function _validateSingup(this: AccountController, account: Account) {
  console.log('api - account - _validateCreate');

  // check obrigatory params
  const obrigatory = ['name', 'email', 'password'];

  obrigatory.forEach((param: string) => {
    // @ts-ignore
    if (!account[param]) {
      throw Errors.PRECONDITION_FAILED([
        {
          key: 'account__is_a_obrigatory_param',
          data: { param },
        },
      ]);
    }
  });

  // check if the email exists

  // check password
}
