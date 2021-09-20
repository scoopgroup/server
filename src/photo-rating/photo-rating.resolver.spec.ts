import { Test, TestingModule } from '@nestjs/testing';
import { PhotoRatingResolver } from './photo-rating.resolver';
import { PhotoRatingService } from './photo-rating.service';

describe('PhotoRatingResolver', () => {
  let resolver: PhotoRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoRatingResolver, PhotoRatingService],
    }).compile();

    resolver = module.get<PhotoRatingResolver>(PhotoRatingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
