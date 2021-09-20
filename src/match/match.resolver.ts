import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { MatchService } from './match.service';
import { Match } from './entities/match.entity';
import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';
import { UserService } from '../user/user.service';

@Resolver(() => Match)
export class MatchResolver {
  constructor(
    private readonly matchService: MatchService,
    private userService: UserService,
  ) {}

  @Mutation(() => Match)
  createMatch(@Args('createMatchInput') createMatchInput: CreateMatchInput) {
    return this.matchService.create(createMatchInput);
  }

  @Query(() => [Match], { name: 'match' })
  findAll() {
    return this.matchService.findAll();
  }

  @Query(() => Match, { name: 'match' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.matchService.findOne(id);
  }

  @Mutation(() => Match)
  updateMatch(@Args('updateMatchInput') updateMatchInput: UpdateMatchInput) {
    return this.matchService.update(updateMatchInput.id, updateMatchInput);
  }

  @Mutation(() => Match)
  removeMatch(@Args('id', { type: () => Int }) id: number) {
    return this.matchService.remove(id);
  }
}
