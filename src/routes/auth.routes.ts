// global
import Router, { Request, Response } from 'express';
import _ from 'lodash';
// local
import { Handler } from '../common/lib/handle';
import { AccountModel } from '../api/account';
import { AuthModel } from '../api/auth';

const router = Router();
const path = '/auth';

router.post('/singup', (request: Request, response: Response) => {
  console.log('route - auth - singup');

  const params = request.body;

  const promise = new AuthModel().singup(params);
  new Handler().json(response, promise);
});

router.post('/singin', (request: Request, response: Response) => {
  console.log('route - auth - singin');

  const params = request.body;

  const promise = new AuthModel().singin(params);
  new Handler().json(response, promise);
});

export { router, path };
