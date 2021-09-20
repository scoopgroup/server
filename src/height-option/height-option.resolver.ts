import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HeightOptionService } from './height-option.service';
import { HeightOption } from './entities/height-option.entity';
import { CreateHeightOptionInput } from './dto/create-height-option.input';
import { UpdateHeightOptionInput } from './dto/update-height-option.input';

@Resolver(() => HeightOption)
export class HeightOptionResolver {
  constructor(private readonly heightOptionService: HeightOptionService) {}

  @Mutation(() => HeightOption)
  createHeightOption(@Args('data') data: CreateHeightOptionInput) {
    return this.heightOptionService.create(data);
  }

  @Query(() => [HeightOption], { name: 'heightOption' })
  findAll() {
    return this.heightOptionService.findAll();
  }

  @Query(() => HeightOption, { name: 'heightOption' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.heightOptionService.findOne(id);
  }

  @Mutation(() => HeightOption)
  updateHeightOption(@Args('data') data: UpdateHeightOptionInput) {
    return this.heightOptionService.update(data.id, data);
  }

  @Mutation(() => HeightOption)
  removeHeightOption(@Args('id', { type: () => Int }) id: string) {
    return this.heightOptionService.remove(id);
  }
}
