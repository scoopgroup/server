import { Test, TestingModule } from '@nestjs/testing';
import { FileEntityService } from './file-entity.service';

describe('FileEntityService', () => {
  let service: FileEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileEntityService],
    }).compile();

    service = module.get<FileEntityService>(FileEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
