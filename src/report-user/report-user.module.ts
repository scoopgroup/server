import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportUserService } from './report-user.service';
import { ReportUserResolver } from './report-user.resolver';
import { ReportUser } from './entities/report-user.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReportUser]), UserModule],
  providers: [ReportUserResolver, ReportUserService],
  exports: [ReportUserService],
})
export class ReportUserModule {}
