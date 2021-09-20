import { Test, TestingModule } from '@nestjs/testing';
import { ReportUserResolver } from './report-user.resolver';
import { ReportUserService } from './report-user.service';

describe('ReportUserResolver', () => {
  let resolver: ReportUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportUserResolver, ReportUserService],
    }).compile();

    resolver = module.get<ReportUserResolver>(ReportUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
