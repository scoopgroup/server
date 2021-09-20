import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PhotoRatingService } from './photo-rating.service';
import { PhotoRating } from './entities/photo-rating.entity';
import { CreatePhotoRatingInput } from './dto/create-photo-rating.input';
import { UpdatePhotoRatingInput } from './dto/update-photo-rating.input';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { PhotoService } from '../photo/photo.service';

@Resolver(() => PhotoRating)
export class PhotoRatingResolver {
  constructor(
    private readonly photoRatingService: PhotoRatingService, // private userService: UserService, // private photoService: PhotoService,
  ) {}

  @Mutation(() => PhotoRating)
  createPhotoRating(@Args('data') data: CreatePhotoRatingInput) {
    return this.photoRatingService.create(data);
  }

  @Query(() => [PhotoRating], { name: 'photoRating' })
  findAll() {
    return this.photoRatingService.findAll();
  }

  @Query(() => PhotoRating, { name: 'photoRating' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.photoRatingService.findOne(id);
  }

  @Query(() => [PhotoRating])
  async findRatingsForPhoto(@Args('id') id: number) {
    return this.photoRatingService.findRatingsForPhoto(id);
  }

  @Query(() => [PhotoRating])
  async findPhotoRatingsByUser(@Args('id') id: number) {
    return this.photoRatingService.findPhotoRatingsByUser(id);
  }

  // @ResolveField((returns) => User)
  // async rater(@Parent() photoRating: PhotoRating): Promise<User> {
  //   return this.userService.findOne(photoRating.raterId);
  // }

  @Mutation(() => PhotoRating)
  updatePhotoRating(
    @Args('updatePhotoRatingInput')
    updatePhotoRatingInput: UpdatePhotoRatingInput,
  ) {
    return this.photoRatingService.update(
      updatePhotoRatingInput.id,
      updatePhotoRatingInput,
    );
  }

  @Mutation(() => PhotoRating)
  removePhotoRating(@Args('id', { type: () => Int }) id: number) {
    return this.photoRatingService.remove(id);
  }
}
