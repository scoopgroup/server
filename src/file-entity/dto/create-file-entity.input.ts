import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFileEntityInput {
  @Field()
  url: string;
}
