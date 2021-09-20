import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FileEntityService } from './file-entity.service';
import { FileEntity } from './entities/file-entity.entity';
import { CreateFileEntityInput } from './dto/create-file-entity.input';
import { UpdateFileEntityInput } from './dto/update-file-entity.input';

@Resolver(() => FileEntity)
export class FileEntityResolver {
  constructor(private readonly fileEntityService: FileEntityService) {}

  @Mutation(() => FileEntity)
  createFileEntity(@Args('data') data: CreateFileEntityInput) {
    return this.fileEntityService.create(data);
  }

  @Query(() => [FileEntity], { name: 'fileEntity' })
  findAll() {
    return this.fileEntityService.findAll();
  }

  @Query(() => FileEntity, { name: 'fileEntity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fileEntityService.findOne(id);
  }

  @Mutation(() => FileEntity)
  updateFileEntity(@Args('data') data: UpdateFileEntityInput) {
    return this.fileEntityService.update(data.id, data);
  }

  @Mutation(() => FileEntity)
  removeFileEntity(@Args('id', { type: () => Int }) id: number) {
    return this.fileEntityService.remove(id);
  }
}
