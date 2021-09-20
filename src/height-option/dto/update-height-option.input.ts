import { CreateHeightOptionInput } from './create-height-option.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHeightOptionInput extends PartialType(
  CreateHeightOptionInput,
) {
  @Field()
  id!: string;

  @Field()
  inches: number;

  @Field()
  display: string;
}
