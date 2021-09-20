import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMatchInput {
  @Field()
  swipedLastId!: number;

  @Field()
  swipedFirstId!: number;

  @Field()
  unmatched: boolean;

  @Field({ nullable: true })
  modifiedDate: Date;
}
