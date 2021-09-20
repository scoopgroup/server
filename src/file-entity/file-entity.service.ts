import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileEntityInput } from './dto/create-file-entity.input';
import { UpdateFileEntityInput } from './dto/update-file-entity.input';
import { FileEntity } from './entities/file-entity.entity';

@Injectable()
export class FileEntityService {
  constructor(
    @InjectRepository(FileEntity) private repository: Repository<FileEntity>,
  ) {}

  async create(data: CreateFileEntityInput) {
    try {
      const fileEntity = this.repository.create(data);
      return await this.repository.save(fileEntity);
    } catch (e) {
      return null;
    }
  }

  async findAll(): Promise<FileEntity[]> {
    try {
      const fileEntitys = await this.repository.find();
      return fileEntitys;
    } catch (e) {
      return [];
    }
  }

  async findOne(id: number): Promise<FileEntity> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  async update(id: number, data: UpdateFileEntityInput): Promise<FileEntity> {
    try {
      const fileEntity = await this.findOne(id);
      Object.assign(fileEntity, data);
      return await this.repository.save(fileEntity);
    } catch (e) {
      return null;
    }
  }

  async remove(id: number): Promise<FileEntity> {
    try {
      const fileEntity = await this.findOne(id);
      return await this.repository.remove(fileEntity);
    } catch (e) {
      return null;
    }
  }
}
