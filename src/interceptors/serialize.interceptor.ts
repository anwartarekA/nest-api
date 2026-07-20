import { ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDto } from '../users/dtos/user.dto';
import { plainToClass } from 'class-transformer';
export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before the route handler', context);
    return next.handle().pipe(
      map((data: any) =>
        plainToClass(UserDto, data, {
          excludeExtraneousValues: true,
        }),
      ),
    );
  }
}
