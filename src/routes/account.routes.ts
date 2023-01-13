// global
import Router, { Request, Response } from 'express';
import _ from 'lodash';
// local
import { Handler } from '../common/lib/handle';
import { AccountController } from '../api/account';

const router = Router();
const path = '/account';

router.get('/:id', (request: Request, response: Response) => {
  console.log('route - account - getByID');

  const id: number = parseInt(_.get(request, 'params.id', null)!);

  const promise = new AccountController().getByID(id);
  new Handler().json(response, promise);
});

router.post('/singup', (request: Request, response: Response) => {
  console.log('route - account - singup');

  const name = _.get(request, 'body.name', null);
  const email = _.get(request, 'body.email', null);
  const password = _.get(request, 'body.password', null);

  const promise = new AccountController().singup({ name, email, password });
  new Handler().json(response, promise);
});

router.post('/singin', (request: Request, response: Response) => {
  console.log('route - account - singin');

  const email = _.get(request, 'body.email', null);
  const password = _.get(request, 'body.password', null);

  const promise = new AccountController().singin({ email, password });
  new Handler().json(response, promise);
});

export { router, path };
