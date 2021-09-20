import { Test, TestingModule } from '@nestjs/testing';
import { PhotoRatingCriteriaOptionService } from './photo-rating-criteria.service';

describe('PhotoRatingCriteriaOptionService', () => {
  let service: PhotoRatingCriteriaOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoRatingCriteriaOptionService],
    }).compile();

    service = module.get<PhotoRatingCriteriaOptionService>(
      PhotoRatingCriteriaOptionService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
