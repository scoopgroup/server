import { Test, TestingModule } from '@nestjs/testing';
import { SwipeResolver } from './swipe.resolver';
import { SwipeService } from './swipe.service';

describe('SwipeResolver', () => {
  let resolver: SwipeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwipeResolver, SwipeService],
    }).compile();

    resolver = module.get<SwipeResolver>(SwipeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
