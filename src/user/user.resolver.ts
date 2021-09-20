import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('data') data: CreateUserInput) {
    return this.userService.create(data);
  }

  @Query(() => [User], { name: 'user' })
  findAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Query(() => User, { name: 'user' })
  findUserWithPhotos(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findUserWithPhotos(id);
  }

  @Mutation(() => User)
  updateUser(@Args('data') data: UpdateUserInput) {
    return this.userService.update(data.id, data);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
