import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ReportEnum } from '../../enum/ReportEnum';
import { ReportUser } from '../entities/report-user.entity';

@InputType()
export class CreateReportUserInput extends PartialType(ReportUser) {
  @Field()
  reporterId!: number;

  @Field()
  accusedId!: number;

  @Field()
  createdDate: Date;

  @Field()
  reason: ReportEnum;

  @Field()
  comments: string;
}
