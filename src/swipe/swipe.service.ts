import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Swipe } from './entities/swipe.entity';
import { CreateSwipeInput } from './dto/create-swipe.input';
import { UpdateSwipeInput } from './dto/update-swipe.input';
import { SwipeEnum } from '../enum/SwipeEnum';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class SwipeService {
  constructor(
    @InjectRepository(Swipe) private repository: Repository<Swipe>,
    private userService: UserService,
  ) {}

  async create(data: CreateSwipeInput) {
    try {
      const newSwipe = this.repository.create(data);
      return await this.repository.save(newSwipe);
    } catch (e) {
      return null;
    }
  }

  async findAll(): Promise<Swipe[]> {
    try {
      const swipes = await this.repository.find();
      return swipes;
    } catch (e) {
      return [];
    }
  }

  async findOne(id: number): Promise<Swipe> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  async findSwiper(id: number): Promise<User> {
    try {
      return await this.userService.findOne(id);
    } catch (e) {
      return null;
    }
  }

  async findShownUser(id: number): Promise<User> {
    try {
      return await this.userService.findOne(id);
    } catch (e) {
      return null;
    }
  }

  async findUserSwipes(id: number): Promise<Swipe[]> {
    try {
      return await this.repository.find({ where: { swiperId: id } });
    } catch (e) {
      return [];
    }
  }

  async findUserLikes(userId: number): Promise<Swipe[]> {
    try {
      return await this.repository.find({
        where: { userId, decision: SwipeEnum.LIKED },
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async findUserDislikes(userId: number): Promise<Swipe[]> {
    try {
      return await this.repository.find({
        where: { userId, decision: SwipeEnum.DISLIKED },
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async findUserLikedBy(shownUserId: number): Promise<Swipe[]> {
    try {
      return await this.repository.find({
        where: { shownUserId, decision: SwipeEnum.LIKED },
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  async findUserDislikedBy(shownUserId: number): Promise<Swipe[]> {
    try {
      return await this.repository.find({
        where: { shownUserId, decision: SwipeEnum.DISLIKED },
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async update(id: number, data: UpdateSwipeInput): Promise<Swipe> {
    try {
      const swipe = await this.findOne(id);
      Object.assign(swipe, data);
      return await this.repository.save(swipe);
    } catch (e) {
      return null;
    }
  }

  async remove(id: number): Promise<Swipe> {
    try {
      const swipe = await this.findOne(id);
      return await this.repository.remove(swipe);
    } catch (e) {
      return null;
    }
  }
}
