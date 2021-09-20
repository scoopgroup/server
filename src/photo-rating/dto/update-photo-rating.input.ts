import { CreatePhotoRatingInput } from './create-photo-rating.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePhotoRatingInput extends PartialType(
  CreatePhotoRatingInput,
) {
  @Field()
  id: number;

  @Field()
  raterId: number;

  @Field()
  photoId: number;

  @Field()
  createdDate: Date;
}
