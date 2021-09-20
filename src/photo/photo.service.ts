import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoInput } from './dto/create-photo.input';
// import { UpdatePhotoInput } from './dto/update-photo.input';
import { Photo } from './entities/photo.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private repository: Repository<Photo>,
    private userService: UserService,
  ) {}

  async create(data: CreatePhotoInput) {
    try {
      const photo = this.repository.create(data);
      return await this.repository.save(photo);
    } catch (e) {
      return null;
    }
  }

  async findAll(): Promise<Photo[]> {
    try {
      const photos = await this.repository.find();
      return photos;
    } catch (e) {
      return [];
    }
  }

  async findOne(id: number): Promise<Photo> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  // don't use since photo rating needs to be image specific
  // async update(id: number, data: UpdatePhotoInput): Promise<Photo> {
  //   try {
  //     const photo = await this.findOne(id);
  //     Object.assign(photo, data);
  //     return await this.repository.save(photo);
  //   } catch (e) {
  //     return null;
  //   }
  // }

  async remove(id: number): Promise<Photo> {
    try {
      const photo = await this.findOne(id);
      return await this.repository.remove(photo);
    } catch (e) {
      return null;
    }
  }

  // @Mutation(() => Photo, {nullable: true})
  // async uploadPhoto(@Arg("data") file) {
  //   const {createReadStream, filename, mimetype, encoding} = await file;
  //
  //   return {
  //     filename,
  //     mimetype,
  //     encoding,
  //     uri: 'http://about:blank',
  //   };
  // }
  //
  //
  // @Mutation(() => Photo, {nullable: true})
  // async updatePhoto(@Arg("id") id, data: CreatePhotoInput) {
  //   const message = await Photo.findOne({where: {id}});
  //   if (!message) {
  //     throw new Error(`The message with id: ${id} does not exist!`);
  //   }
  //   Object.assign(message, data, {modifiedDate: new Date()});
  //   await message.save();
  //   return message;
  // }
  //
  // @Mutation(() => Photo, {nullable: true})
  // async sendPhoto(@Arg("id") id, data: CreatePhotoInput) {
  //   const message = await Photo.findOne({where: {id}});
  //   if (!message) {
  //     throw new Error(`The message with id: ${id} does not exist!`);
  //   }
  //   const sentDate = new Date();
  //   Object.assign(message, data, {sentDate});
  //   if (data.text !== undefined) {
  //     Object.assign(message, {modifiedDate: sentDate});
  //   }
  //   await message.save();
  //   return message;
  // }
  //
  // @Mutation(() => [Photo])
  // async readPhotos(@Arg("data") {senderId, receiverId}: ReadPhotoInput) {
  //   const messages = await Photo.find({
  //     where:
  //       {senderId, receiverId, revokedDate: IsNull(), sentDate: Not(IsNull()), readDate: IsNull()}
  //   });
  //
  //   if (messages.length) {
  //     const readDate = new Date();
  //     messages.forEach(message => {
  //       Object.assign(message, {readDate});
  //       message.save();
  //     });
  //   }
  // }
  //
  // @Mutation(() => Photo, {nullable: true})
  // async revokePhoto(@Arg("id") id) {
  //   const message = await Photo.findOne({where: {id}});
  //   if (!message) {
  //     throw new Error(`The message with id: ${id} does not exist!`);
  //   }
  //   Object.assign(message, {revokedDate: new Date()});
  //   await message.save();
  //   return message;
  // }
}
