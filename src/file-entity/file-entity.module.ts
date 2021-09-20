import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntityService } from './file-entity.service';
import { FileEntityResolver } from './file-entity.resolver';
import { FileEntity } from './entities/file-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [FileEntityResolver, FileEntityService],
  exports: [FileEntityService],
})
export class FileEntityModule {}
