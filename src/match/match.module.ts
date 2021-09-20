import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchService } from './match.service';
import { MatchResolver } from './match.resolver';
import { Match } from './entities/match.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Match]), UserModule],
  providers: [MatchResolver, MatchService],
  exports: [MatchService],
})
export class MatchModule {}
