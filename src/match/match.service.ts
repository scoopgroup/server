import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';
import { Match } from './entities/match.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match) private repository: Repository<Match>,
    private userService: UserService,
  ) {}

  async create(data: CreateMatchInput) {
    try {
      const match = this.repository.create(data);
      return await this.repository.save(match);
    } catch (e) {
      return null;
    }
  }

  async findAll(): Promise<Match[]> {
    try {
      const matchs = await this.repository.find();
      return matchs;
    } catch (e) {
      return [];
    }
  }

  async findOne(id: number): Promise<Match> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  async update(id: number, data: UpdateMatchInput): Promise<Match> {
    try {
      const match = await this.findOne(id);
      Object.assign(match, data);
      return await this.repository.save(match);
    } catch (e) {
      return null;
    }
  }

  async remove(id: number): Promise<Match> {
    try {
      const match = await this.findOne(id);
      return await this.repository.remove(match);
    } catch (e) {
      return null;
    }
  }

  // @Query(() => [Match])
  // async user_matches(@Arg("id") id: number) {
  //   try {
  //     return Match.find({where: [{swipedLastId: id, unmatched: false}, {swipedFirstId: id, unmatched: false}]});
  //   } catch (e) {
  //     console.error(e);
  //     return [];
  //   }
  // }
  //
  // @Mutation(() => Match, {nullable: true})
  // async unmatch(@Arg("id") id: number) {
  //   try {
  //     const match = await Match.findOne({where: {id}});
  //     if (!match) {
  //       throw new Error(`The match with id: ${id} does not exist!`);
  //     }
  //     Object.assign(match, {modifiedDate: new Date(), unmatched: true});
  //     await match.save();
  //     return match;
  //   } catch (e) {
  //     console.error(e);
  //     return null;
  //   }
  // }
}
