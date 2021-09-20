import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field()
  senderId: number;

  @Field()
  receiverId: number;

  @Field()
  text: string;
}
