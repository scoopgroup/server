import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { Message } from './entities/message.entity';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private repository: Repository<Message>,
    private userService: UserService,
  ) {}

  async create(data: CreateMessageInput) {
    try {
      const message = this.repository.create(data);
      return await this.repository.save(message);
    } catch (e) {
      return null;
    }
  }

  async findAll(): Promise<Message[]> {
    try {
      const messages = await this.repository.find();
      return messages;
    } catch (e) {
      return [];
    }
  }

  async findOne(id: number): Promise<Message> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  async update(id: number, data: UpdateMessageInput): Promise<Message> {
    try {
      const message = await this.findOne(id);
      Object.assign(message, data);
      return await this.repository.save(message);
    } catch (e) {
      return null;
    }
  }

  async read(id: number): Promise<Message> {
    try {
      const message = await this.findOne(id);
      Object.assign(message, { readDate: new Date() });
      return await this.repository.save(message);
    } catch (e) {
      return null;
    }
  }

  async remove(id: number): Promise<Message> {
    try {
      const message = await this.findOne(id);
      return await this.repository.remove(message);
    } catch (e) {
      return null;
    }
  }

  // @Query(() => [Message])
  // async user_conversation(@Arg("input") {senderId, receiverId}: CreateMessageInput) {
  //   try{
  //     return Message.find({
  //       where:
  //         [
  //           {senderId, receiverId, revokedDate: IsNull(), sentDate: Not(IsNull())},
  //           {senderId: receiverId, receiverId: senderId, revokedDate: IsNull(), sentDate: Not(IsNull())}
  //         ]
  //     });
  //   } catch (e) {
  //     console.error(e);
  //     return [];
  //   }
  // }
  // @Mutation(() => Message)
  // async updateMessage(@Arg("id") id: number, data: CreateMessageInput) {
  //   try{
  //     const message = await Message.findOne({where: {id}});
  //     if (!message) {
  //       throw new Error(`The message with id: ${id} does not exist!`);
  //     }
  //     Object.assign(message, data, {modifiedDate: new Date()});
  //     await message.save();
  //     return message;
  //   } catch (e) {
  //     console.error(e);
  //     return null;
  //   }
  // }
  //
  // @Mutation(() => Message)
  // async sendMessage(@Arg("id") id: number, data: CreateMessageInput) {
  //   try{
  //     const message = await Message.findOne({where: {id}});
  //     if (!message) {
  //       throw new Error(`The message with id: ${id} does not exist!`);
  //     }
  //     const sentDate = new Date();
  //     Object.assign(message, data, {sentDate});
  //     if (data.text !== undefined) {
  //       Object.assign(message, {modifiedDate: sentDate});
  //     }
  //     await message.save();
  //     return message;
  //   } catch (e) {
  //     console.error(e);
  //     return null;
  //   }
  // }
  //
  // @Mutation(() => [Message])
  // async readMessages(@Arg("data") {senderId, receiverId}: ReadMessageInput) {
  //   try{
  //     const messages = await Message.find({
  //       where:
  //         {senderId, receiverId, revokedDate: IsNull(), sentDate: Not(IsNull()), readDate: IsNull()}
  //     });
  //
  //     if (messages.length) {
  //       const readDate = new Date();
  //       messages.forEach(message => {
  //         Object.assign(message, {readDate});
  //         message.save();
  //       });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //     return [];
  //   }
  //
  // }
  //
  // @Mutation(() => Message)
  // async revokeMessage(@Arg("id") id: number) {
  //   try{
  //     const message = await Message.findOne({where: {id}});
  //     if (!message) {
  //       throw new Error(`The message with id: ${id} does not exist!`);
  //     }
  //     Object.assign(message, {revokedDate: new Date()});
  //     await message.save();
  //     return message;
  //   } catch (e) {
  //     console.error(e);
  //     return null;
  //   }
}
