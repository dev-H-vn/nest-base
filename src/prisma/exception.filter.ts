import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { capitalizeFirstLetter } from 'src/utils';
import { match } from 'ts-pattern';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.log('exception--------------', { exception });
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');
    return match(exception.code)
      .with('P2002', () => {
        const targetMsgs = (exception.meta.target as any).map((field: any) => ({
          [field as string]: capitalizeFirstLetter(field + ' already exists.'),
        }));
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: targetMsgs,
        });
      })
      .with('P2000', () => {
        const status = HttpStatus.BAD_REQUEST;
        response.status(status).json({
          statusCode: status,
          message: capitalizeFirstLetter(message),
        });
      })
      .with('P2025', () => {
        const status = HttpStatus.NOT_FOUND;
        response.status(status).json({
          statusCode: status,
          message: capitalizeFirstLetter(message),
        });
      })
      .otherwise(() => super.catch(exception, host));
  }
}
