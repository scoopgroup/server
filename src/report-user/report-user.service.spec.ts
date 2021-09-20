import { Test, TestingModule } from '@nestjs/testing';
import { ReportUserService } from './report-user.service';

describe('ReportUserService', () => {
  let service: ReportUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportUserService],
    }).compile();

    service = module.get<ReportUserService>(ReportUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
