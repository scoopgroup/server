import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ReportUserService } from './report-user.service';
import { ReportUser } from './entities/report-user.entity';
import { CreateReportUserInput } from './dto/create-report-user.input';
import { UpdateReportUserInput } from './dto/update-report-user.input';

@Resolver(() => ReportUser)
export class ReportUserResolver {
  constructor(private readonly reportUserService: ReportUserService) {}

  @Mutation(() => ReportUser)
  createReport(@Args('data') data: CreateReportUserInput) {
    return this.reportUserService.create(data);
  }

  @Query(() => [ReportUser], { name: 'reportUser' })
  findAllReports() {
    return this.reportUserService.findAll();
  }

  @Query(() => ReportUser, { name: 'reportUser' })
  findReport(@Args('id', { type: () => Int }) id: number) {
    return this.reportUserService.findOne(id);
  }

  @Query(() => [ReportUser])
  async findReportsAgainstUser(@Args('id') id: number) {
    return this.reportUserService.findReportsAgainstUser(id);
  }

  @Query(() => [ReportUser])
  async findReportsByUser(@Args('id') id: number) {
    return this.reportUserService.findReportsByUser(id);
  }

  @Mutation(() => ReportUser)
  updateReportUser(@Args('data') data: UpdateReportUserInput) {
    return this.reportUserService.update(data.id, data);
  }

  @Mutation(() => ReportUser)
  removeReportUser(@Args('id', { type: () => Int }) id: number) {
    return this.reportUserService.remove(id);
  }
}
