import { CreateMessageInput } from './create-message.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column, UpdateDateColumn } from 'typeorm';

@InputType()
export class UpdateMessageInput extends PartialType(CreateMessageInput) {
  @Field(() => Int)
  id: number;

  @Field()
  senderId: number;

  @Field()
  receiverId: number;

  @Field()
  text: string;

  @Field({ nullable: true })
  @UpdateDateColumn()
  modifiedDate: Date;

  @Field()
  sentDate: Date;

  @Field({ nullable: true })
  readDate: Date;

  @Field({ nullable: true })
  revokedDate: Date;
}
