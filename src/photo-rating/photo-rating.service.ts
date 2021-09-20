import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoRatingInput } from './dto/create-photo-rating.input';
import { UpdatePhotoRatingInput } from './dto/update-photo-rating.input';
import { PhotoRating } from './entities/photo-rating.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class PhotoRatingService {
  constructor(
    @InjectRepository(PhotoRating) private repository: Repository<PhotoRating>,
    private userService: UserService,
  ) {}

  async createPhotoRating(data: CreatePhotoRatingInput) {
    try {
      const photoRating = this.repository.create(data);
      return await this.repository.save(photoRating);
    } catch (e) {
      return null;
    }
  }

  async findAllPhotoRatings(): Promise<PhotoRating[]> {
    try {
      const photoRatings = await this.repository.find();
      return photoRatings;
    } catch (e) {
      return [];
    }
  }

  async findPhotoRating(id: number): Promise<PhotoRating> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  async findRatingsForPhoto(id: number): Promise<PhotoRating[]> {
    try {
      return await this.repository.find({ where: { photoId: id } });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async findPhotoRatingsByUser(id: number): Promise<PhotoRating[]> {
    try {
      return await this.repository.find({ where: { raterId: id } });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async updatePhotoRating(
    id: number,
    data: UpdatePhotoRatingInput,
  ): Promise<PhotoRating> {
    try {
      const photoRating = await this.repository.findOne(id);
      Object.assign(photoRating, data);
      return await this.repository.save(photoRating);
    } catch (e) {
      return null;
    }
  }

  async removePhotoRating(id: number): Promise<PhotoRating> {
    try {
      const photoRating = await this.repository.findOne(id);
      return await this.repository.remove(photoRating);
    } catch (e) {
      return null;
    }
  }
}
