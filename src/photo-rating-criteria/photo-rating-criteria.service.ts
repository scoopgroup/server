import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoRatingCriteriaOptionInput } from './dto/create-photo-rating-criteria-option.input';
import { UpdatePhotoRatingCriteriaOptionInput } from './dto/update-photo-rating-criteria-option.input';
import { PhotoRatingCriteriaOption } from './entities/photo-rating-criteria-option.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class PhotoRatingCriteriaOptionService {
  constructor(
    @InjectRepository(PhotoRatingCriteriaOption)
    private repository: Repository<PhotoRatingCriteriaOption>,
    private userService: UserService,
  ) {}

  create(data: CreatePhotoRatingCriteriaOptionInput) {
    return 'This action adds a new photoRatingCriterion';
  }

  findAll() {
    return `This action returns all photoRatingCriteria`;
  }

  findOne(id: string) {
    return `This action returns a #${id} photoRatingCriterion`;
  }

  update(id: string, data: UpdatePhotoRatingCriteriaOptionInput) {
    return `This action updates a #${id} photoRatingCriterion`;
  }

  remove(id: string) {
    return `This action removes a #${id} photoRatingCriterion`;
  }
}
