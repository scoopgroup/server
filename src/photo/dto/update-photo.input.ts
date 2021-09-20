import { CreatePhotoInput } from './create-photo.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePhotoInput extends PartialType(CreatePhotoInput) {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  createdDate: Date;

  @Field()
  index: number;

  @Field()
  image: string;

  @Field()
  modifiedDate: Date;
}
