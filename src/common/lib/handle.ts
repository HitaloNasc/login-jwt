import { Response } from 'express';
import { Errors } from './http-exeption';

export class Handler {
  private global = (response: Response, statusCode: number, message: any) => {
    console.log('lib - handler - globalHandler');
    console.log(`[${statusCode}]`);
    return response.status(statusCode).json(message).end();
  };

  private error = (response: Response, error: any) => {
    console.log('lib - handler - handlerError');

    if (!error) {
      console.dir(Errors.INTERNAL_SERVER_ERROR());
    }

    console.log('Error handler:');
    console.dir(error);

    const statusCode: number = error.statusCode;

    return response
      .status(statusCode)
      .json({
        statusCode: error.statusCode,
        title: error.title,
        message: {
          result: 'error',
          msg: error.errors,
        },
      })
      .end();
  };

  public json = async (response: Response, promise: Promise<any>) => {
    console.log('lib - handler - json');
    let result;
    if (promise) {
      try {
        let res = await promise;
        result = this.global(response, 200, res);
      } catch (error) {
        result = this.error(response, error);
      }
    } else {
      result = this.error(response, null);
    }
    return result;
  };
}
