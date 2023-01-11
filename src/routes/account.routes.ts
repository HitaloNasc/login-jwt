import Router, { Request, Response } from 'express';
import _ from 'lodash';
import { handlerJson } from '../common/lib/handle';
import Account from '../api/account';

const router = Router();
const path = '/account';

/* router.get('/', (request: Request, response: Response) => {
  console.log('route - exemple - list');
  const exemple = new Exemple();
  const promise = exemple.list();
  handlerJson(response, promise);
}); */

router.get('/:id', (request: Request, response: Response) => {
  console.log('route - account - getByID');

  const id = _.get(request, 'params.id', null);

  const accountModel = new Account();
  const promise = accountModel.getByID(id);
  handlerJson(response, promise);
});

router.post('/singup', (request: Request, response: Response) => {
  console.log('route - account - singup');

  const name = _.get(request, 'body.name', null);
  const email = _.get(request, 'body.email', null);
  const password = _.get(request, 'body.password', null);

  const accountModel = new Account();
  const promise = accountModel.singup({ name, email, password });
  handlerJson(response, promise);
});

router.post('/singin', (request: Request, response: Response) => {
  console.log('route - account - singin');

  const token = _.get(request, 'cookies.token', null);
  const email = _.get(request, 'body.email', null);
  const password = _.get(request, 'body.password', null);

  const accountModel = new Account();
  const promise = accountModel.singin({ token, email, password });
  handlerJson(response, promise);
});

export { router, path };
