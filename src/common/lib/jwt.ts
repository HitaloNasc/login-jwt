// global
import jwt from 'jsonwebtoken';
// local
import { Errors } from './http-exeption';

export class Jwt {
  private secret = process.env.JWT_SECRET || '';
  private expiresIn = `${process.env.JWT_EXPIRE_TIME}${process.env.JWT_EXPIRE_FORMAT}`;

  public create = (data: { id: number; name: string; type: number }) => {
    console.log('lib - jwt - create');
    return jwt.sign(data, this.secret, { expiresIn: this.expiresIn, algorithm: 'HS512' });
  };

  public verify = (token: string) => {
    console.log('lib - jwt - verify');
    try {
      jwt.verify(token, this.secret);
    } catch (err) {
      throw Errors.UNAUTHORIZED();
    }
  };
}
