// global
import Router, { Request, Response } from 'express';
import _ from 'lodash';
// local
import { Handler } from '../common/lib/handle';
import { AccountModel } from '../api/account';

const router = Router();
const path = '/account';

router.get('/:id', (request: Request, response: Response) => {
  console.log('route - account - getByID');

  const id = _.get(request, 'params.id', null);

  const promise = new AccountModel().getByID(id);
  new Handler().json(response, promise);
});

export { router, path };
