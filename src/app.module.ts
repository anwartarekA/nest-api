import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ReportModule } from './reports/report.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [UserModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
