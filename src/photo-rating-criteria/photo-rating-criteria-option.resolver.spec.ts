import { Test, TestingModule } from '@nestjs/testing';
import { PhotoRatingCriteriaOptionResolver } from './photo-rating-criteria.resolver';
import { PhotoRatingCriteriaOptionService } from './photo-rating-criteria.service';

describe('PhotoRatingCriteriaOptionResolver', () => {
  let resolver: PhotoRatingCriteriaOptionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PhotoRatingCriteriaOptionResolver,
        PhotoRatingCriteriaOptionService,
      ],
    }).compile();

    resolver = module.get<PhotoRatingCriteriaOptionResolver>(
      PhotoRatingCriteriaOptionResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
