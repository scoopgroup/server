import { IsAlpha, IsEmail } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { GenderEnum } from '../../enum/GenderEnum';
import { User } from '../entities/user.entity';
import { IsEmailAlreadyExist } from '../IsEmailAlreadyExist';

@InputType()
export class UpdateUserInput extends PartialType(User) {
  @Field()
  id: number;

  @IsEmail({}, { message: 'must be a valid email' })
  @IsEmailAlreadyExist({ message: 'email already in use' })
  @Field({ nullable: true })
  email?: string;

  @Field()
  enabled?: boolean;

  @IsAlpha()
  @Field({ nullable: true })
  firstname?: string;

  @IsAlpha()
  @Field({ nullable: true })
  lastname?: string;

  @Field(() => GenderEnum, { nullable: true })
  gender?: GenderEnum;

  @Field(() => [GenderEnum], { nullable: true })
  lookingForGender?: GenderEnum[];

  @Field(() => Date, { nullable: true })
  birthday?: Date;

  @Field({ nullable: true })
  jobTitle?: string;

  @Field({ nullable: true })
  work?: string;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  minHeight?: number;

  @Field({ nullable: true })
  maxHeight?: number;
}
