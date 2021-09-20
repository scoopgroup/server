import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwipeService } from './swipe.service';
import { SwipeResolver } from './swipe.resolver';
import { Swipe } from './entities/swipe.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Swipe]), UserModule],
  providers: [SwipeResolver, SwipeService],
  exports: [SwipeService],
})
export class SwipeModule {}
