import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
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
