import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { Message } from './entities/message.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UserModule],
  providers: [MessageResolver, MessageService],
  exports: [MessageService],
})
export class MessageModule {}
