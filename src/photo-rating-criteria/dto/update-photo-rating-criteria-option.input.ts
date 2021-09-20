import { CreatePhotoRatingCriteriaOptionInput } from './create-photo-rating-criteria-option.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { PhotoRatingCriteriaEnum } from '../../enum/PhotoRatingEnum';

@InputType()
export class UpdatePhotoRatingCriteriaOptionInput extends PartialType(
  CreatePhotoRatingCriteriaOptionInput,
) {
  @Field(() => PhotoRatingCriteriaEnum)
  id!: PhotoRatingCriteriaEnum;

  @Field()
  name: number;

  @Field()
  description: string;
}
