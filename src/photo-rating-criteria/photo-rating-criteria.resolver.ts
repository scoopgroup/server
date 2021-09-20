import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhotoRatingCriteriaOptionService } from './photo-rating-criteria.service';
import { PhotoRatingCriteriaOption } from './entities/photo-rating-criteria-option.entity';
import { CreatePhotoRatingCriteriaOptionInput } from './dto/create-photo-rating-criteria-option.input';
import { UpdatePhotoRatingCriteriaOptionInput } from './dto/update-photo-rating-criteria-option.input';

@Resolver(() => PhotoRatingCriteriaOption)
export class PhotoRatingCriteriaOptionResolver {
  constructor(
    private readonly photoRatingCriteriaOptionService: PhotoRatingCriteriaOptionService,
  ) {}

  @Mutation(() => PhotoRatingCriteriaOption)
  createPhotoRatingCriteriaOption(
    @Args('data') data: CreatePhotoRatingCriteriaOptionInput,
  ) {
    return this.photoRatingCriteriaOptionService.create(data);
  }

  @Query(() => [PhotoRatingCriteriaOption], { name: 'photoRatingCriteria' })
  findAll() {
    return this.photoRatingCriteriaOptionService.findAll();
  }

  @Query(() => PhotoRatingCriteriaOption, { name: 'photoRatingCriterion' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.photoRatingCriteriaOptionService.findOne(id);
  }

  @Mutation(() => PhotoRatingCriteriaOption)
  updatePhotoRatingCriteria(
    @Args('data') data: UpdatePhotoRatingCriteriaOptionInput,
  ) {
    return this.photoRatingCriteriaOptionService.update(data.id, data);
  }

  @Mutation(() => PhotoRatingCriteriaOption)
  removePhotoRatingCriteria(@Args('id', { type: () => Int }) id: string) {
    return this.photoRatingCriteriaOptionService.remove(id);
  }
}
