import { ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before the route handler', context);
    return next
      .handle()
      .pipe(
        map((data: any) =>
          console.log(
            'after the route handler, before response is sent out',
            data,
          ),
        ),
      );
  }
}
