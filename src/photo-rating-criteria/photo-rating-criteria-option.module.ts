import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoRatingCriteriaOptionService } from './photo-rating-criteria.service';
import { PhotoRatingCriteriaOptionResolver } from './photo-rating-criteria.resolver';
import { PhotoRatingCriteriaOption } from './entities/photo-rating-criteria-option.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoRatingCriteriaOption]), UserModule],
  providers: [
    PhotoRatingCriteriaOptionResolver,
    PhotoRatingCriteriaOptionService,
  ],
  exports: [PhotoRatingCriteriaOptionService],
})
export class PhotoRatingCriteriaOptionModule {}
