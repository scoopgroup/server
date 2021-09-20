import { Test, TestingModule } from '@nestjs/testing';
import { PhotoRatingService } from './photo-rating.service';

describe('PhotoRatingService', () => {
  let service: PhotoRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoRatingService],
    }).compile();

    service = module.get<PhotoRatingService>(PhotoRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
