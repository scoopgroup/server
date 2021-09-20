import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoRatingService } from './photo-rating.service';
import { PhotoRatingResolver } from './photo-rating.resolver';
import { PhotoRating } from './entities/photo-rating.entity';
import { UserModule } from '../user/user.module';
import { PhotoModule } from '../photo/photo.module';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoRating]), UserModule, PhotoModule],
  providers: [PhotoRatingResolver, PhotoRatingService],
  exports: [PhotoRatingService],
})
export class PhotoRatingModule {}
