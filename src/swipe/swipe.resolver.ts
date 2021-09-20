import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { SwipeService } from './swipe.service';
import { Swipe } from './entities/swipe.entity';
import { CreateSwipeInput } from './dto/create-swipe.input';
import { UpdateSwipeInput } from './dto/update-swipe.input';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Resolver(() => Swipe)
export class SwipeResolver {
  constructor(
    private readonly swipeService: SwipeService, //             private userService: UserService
  ) {}

  @Mutation(() => Swipe)
  createSwipe(@Args('data') data: CreateSwipeInput) {
    return this.swipeService.create(data);
  }

  @Query(() => [Swipe], { name: 'swipe' })
  findAllSwipes() {
    return this.swipeService.findAll();
  }

  @Query(() => Swipe, { name: 'swipe' })
  findSwipe(@Args('id', { type: () => Int }) id: number) {
    return this.swipeService.findOne(id);
  }

  @Query(() => Swipe, { name: 'swipe' })
  findUserSwipes(@Args('id', { type: () => Int }) id: number) {
    return this.swipeService.findUserSwipes(id);
  }

  @ResolveField((returns) => User)
  async swiper(@Parent() swipe: Swipe): Promise<User> {
    return this.swipeService.findSwiper(swipe.swiperId);
  }

  @ResolveField((returns) => User)
  async shownUser(@Parent() swipe: Swipe): Promise<User> {
    return this.swipeService.findShownUser(swipe.shownUserId);
  }

  @Query(() => Swipe, { name: 'swipe' })
  findUserLikes(@Args('id', { type: () => Int }) id: number) {
    return this.swipeService.findUserLikes(id);
  }

  @Query(() => Swipe, { name: 'swipe' })
  findUserDislikes(@Args('id', { type: () => Int }) id: number) {
    return this.swipeService.findUserDislikes(id);
  }

  @Query(() => Swipe, { name: 'swipe' })
  findUserLikedBy(@Args('id', { type: () => Int }) id: number) {
    return this.swipeService.findUserLikedBy(id);
  }

  @Query(() => Swipe, { name: 'swipe' })
  findUserDislikedBy(@Args('id', { type: () => Int }) id: number) {
    return this.swipeService.findUserDislikedBy(id);
  }

  @Mutation(() => Swipe)
  updateSwipe(@Args('data') data: UpdateSwipeInput) {
    return this.swipeService.update(data.id, data);
  }

  @Mutation(() => Swipe)
  removeSwipe(@Args('id', { type: () => Int }) id: number) {
    return this.swipeService.remove(id);
  }
}
