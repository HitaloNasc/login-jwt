// global
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { addDays } from 'date-fns';
// local
import TokenModel from '../token';
// entity
import ACCOUNT from './cosnts';
import { Account } from './interface';
import getByEmail from './getByEmail';
import { Errors } from '../../common/lib/http-exeption';

interface SinginProps {
  token: string;
  email: string;
  password: string;
}

async function singin({ email, password }: SinginProps) {
  console.log('api - account - singin');

  const account: Account = await getByEmail(email);

  if (account.status === ACCOUNT.STATUS.INACTIVE) {
    throw Errors.UNAUTHORIZED();
  }

  const isSamePassword = await bcrypt.compare(password, account.password);
  if (!isSamePassword) {
    throw Errors.UNAUTHORIZED();
  }

  const secret = process.env.JWT_SECRET || '';
  const expiresIn = `${process.env.JWT_EXPIRE_TIME}${process.env.JWT_EXPIRE_FORMAT}`;
  const tokenHash = jwt.sign({ id: account.id, name: account.name, type: account.type }, secret, { expiresIn, algorithm: 'HS512' });

  const tokenModel = new TokenModel();
  await tokenModel.create({
    token: tokenHash,
    expires: addDays(new Date(), parseInt(process.env.JWT_EXPIRE_TIME!)),
    accountId: account.id,
  });

  return { ...account, token: tokenHash };
}

export default singin;
