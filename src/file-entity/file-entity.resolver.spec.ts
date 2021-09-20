import { Test, TestingModule } from '@nestjs/testing';
import { FileEntityResolver } from './file-entity.resolver';
import { FileEntityService } from './file-entity.service';

describe('FileEntityResolver', () => {
  let resolver: FileEntityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileEntityResolver, FileEntityService],
    }).compile();

    resolver = module.get<FileEntityResolver>(FileEntityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
