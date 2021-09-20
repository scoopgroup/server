import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHeightOptionInput {
  @Field()
  id!: string;

  @Field()
  inches: number;

  @Field()
  display: string;
}
