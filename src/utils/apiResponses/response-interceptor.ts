import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonResponse } from './common-response.interface';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log('--------------------------------', context);
    return next.handle().pipe(
      tap((data) => {
        const response: CommonResponse<any> = {
          statusCode: context.switchToHttp().getResponse().statusCode,
          data,
          message: 'Successfully',
        };
        context.switchToHttp().getResponse().json(response);
      }),
    );
  }
}
