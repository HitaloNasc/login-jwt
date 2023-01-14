// global
import { addDays } from 'date-fns';
// local
import { Errors } from '../../common/lib/http-exeption';
import { Jwt } from '../../common/lib/jwt';
import { AccountModel } from '../account';
import { TokenModel } from '../token';
import { Account } from '../account/interface';
// entity
import { AuthModel } from '.';

export async function singin(this: AuthModel, { email, password }: { email: string; password: string }) {
  console.log('api - auth - singin');

  await this._validateSingin({ email, password });

  const accountModel = new AccountModel();
  const tokenModel = new TokenModel();
  const jwt = new Jwt();
  
  const account: Account = await accountModel.getByEMAIL(email);
  const { id, name, type } = account;
  const token = jwt.create({ id: id!, name, type: type! });

  await tokenModel.create({
    token,
    expires: addDays(new Date(), parseInt(process.env.JWT_EXPIRE_TIME!)),
    accountId: account.id,
  });

  return { name: account.name, email: account.email, type: account.type, token };
}
