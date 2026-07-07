import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ReportModule } from './reports/report.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    UserModule,
    ReportModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'db.sqlite',
      synchronize: true,
      entities: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
