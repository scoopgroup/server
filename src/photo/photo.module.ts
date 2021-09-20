import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoService } from './photo.service';
import { PhotoResolver } from './photo.resolver';
import { Photo } from './entities/photo.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), UserModule],
  providers: [PhotoResolver, PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
