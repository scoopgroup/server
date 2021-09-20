import { CreateFileEntityInput } from './create-file-entity.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFileEntityInput extends PartialType(CreateFileEntityInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
