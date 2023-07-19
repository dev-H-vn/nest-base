import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CommonResponse } from './common-response.interface';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log('1111111111111111111', context);
    const response = context.switchToHttp().getResponse();
    if (!response.headersSent) {
      return next.handle().pipe(
        take(1),
        map((data) => {
          const commonResponse: CommonResponse<any> = {
            statusCode: response.statusCode,
            data,
            message: 'Successfully',
          };
          response.status(commonResponse.statusCode).json(commonResponse);
        }),
      );
    }
    return next.handle();
  }
}
