// global
import bcrypt from 'bcryptjs';
import { addDays } from 'date-fns';
// local
import { Errors } from '../../common/lib/http-exeption';
import { Jwt } from '../../common/lib/jwt';
import { TokenController } from '../token';
// entity
import { AccountController } from '.';
import { Account } from './interface';

export async function singin(this: AccountController, { email, password }: { email: string; password: string }) {
  console.log('api - account - singin');

  const account: Account = await this.getByEMAIL(email);

  if (!account) {
    throw Errors.UNAUTHORIZED();
  }

  if (account.status === this.STATUS.INACTIVE) {
    throw Errors.UNAUTHORIZED();
  }

  const isSamePassword = await bcrypt.compare(password, account.password);
  if (!isSamePassword) {
    throw Errors.UNAUTHORIZED();
  }

  const jwt = new Jwt();
  const { id, name, type } = account;
  const token = jwt.create({ id: id!, name, type: type! });

  const tokenController = new TokenController(this.knex);
  await tokenController.create({
    token,
    expires: addDays(new Date(), parseInt(process.env.JWT_EXPIRE_TIME!)),
    accountId: account.id,
  });

  return { ...account, token };
}
