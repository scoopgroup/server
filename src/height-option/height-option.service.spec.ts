import { Test, TestingModule } from '@nestjs/testing';
import { HeightOptionService } from './height-option.service';

describe('HeightOptionService', () => {
  let service: HeightOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeightOptionService],
    }).compile();

    service = module.get<HeightOptionService>(HeightOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
