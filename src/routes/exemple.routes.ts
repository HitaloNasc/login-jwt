import Router, { Request, Response } from 'express';
import { handlerJson } from '../common/lib/handle';
import Exemple from '../api/Exemple';

const router = Router();
const path = '/exemple';

router.get('/', (request: Request, response: Response) => {
  console.log('route - exemple - list');
  const exemple = new Exemple();
  const promise = exemple.list();
  handlerJson(response, promise);
});

export { router, path };
