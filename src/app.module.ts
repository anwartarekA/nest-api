import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [UsersModule, ReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
