import { InputType, Field, PartialType } from '@nestjs/graphql';
import { PhotoRating } from '../entities/photo-rating.entity';

@InputType()
export class CreatePhotoRatingInput {
  @Field()
  raterId: number;

  @Field()
  photoId: number;

  @Field()
  createdDate: Date;
}
