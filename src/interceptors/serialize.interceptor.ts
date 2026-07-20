import { ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDto } from '../users/dtos/user.dto';
import { plainToClass } from 'class-transformer';
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) =>
        plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        }),
      ),
    );
  }
}
