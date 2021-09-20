import { InputType, Field } from '@nestjs/graphql';
import { PhotoRatingCriteriaEnum } from '../../enum/PhotoRatingEnum';

@InputType()
export class CreatePhotoRatingCriteriaOptionInput {
  @Field(() => PhotoRatingCriteriaEnum)
  id!: PhotoRatingCriteriaEnum;

  @Field()
  name: number;

  @Field()
  description: string;
}
