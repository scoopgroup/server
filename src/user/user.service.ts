import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async create(data: CreateUserInput) {
    try {
      const newUser = this.repository.create(data);
      // TO DO bycrypt
      Object.assign(newUser, { password: data.password });

      return await this.repository.save(newUser);
    } catch (e) {
      return null;
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await this.repository.find();
      return users;
    } catch (e) {
      return [];
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      return await this.repository.findOneOrFail({ where: { email } });
    } catch (e) {
      return null;
    }
  }

  async findUserWithPhotos(id: number): Promise<User> {
    try {
      return await this.repository.findOne({
        where: { id },
        relations: ['photos'],
      });
    } catch (e) {
      return null;
    }
  }

  async update(id: number, data: UpdateUserInput): Promise<User> {
    try {
      const user = await this.findOne(id);
      // Object.assign(user, data);
      return await this.repository.save(user);
    } catch (e) {
      return null;
    }
  }

  async remove(id: number): Promise<User> {
    try {
      const user = await this.findOne(id);
      return await this.repository.remove(user);
    } catch (e) {
      return null;
    }
  }
}
