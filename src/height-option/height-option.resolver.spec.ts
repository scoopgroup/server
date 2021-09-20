import { Test, TestingModule } from '@nestjs/testing';
import { HeightOptionResolver } from './height-option.resolver';
import { HeightOptionService } from './height-option.service';

describe('HeightOptionResolver', () => {
  let resolver: HeightOptionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeightOptionResolver, HeightOptionService],
    }).compile();

    resolver = module.get<HeightOptionResolver>(HeightOptionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
