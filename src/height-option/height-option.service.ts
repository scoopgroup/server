import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHeightOptionInput } from './dto/create-height-option.input';
import { UpdateHeightOptionInput } from './dto/update-height-option.input';
import { HeightOption } from './entities/height-option.entity';

@Injectable()
export class HeightOptionService {
  constructor(
    @InjectRepository(HeightOption)
    private repository: Repository<HeightOption>,
  ) {}

  create(data: CreateHeightOptionInput) {
    return 'This action adds a new heightOption';
  }

  findAll() {
    return `This action returns all heightOption`;
  }

  findOne(id: string) {
    return `This action returns a #${id} heightOption`;
  }

  update(id: string, data: UpdateHeightOptionInput) {
    return `This action updates a #${id} heightOption`;
  }

  remove(id: string) {
    return `This action removes a #${id} heightOption`;
  }
}
