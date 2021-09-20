import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ReportUser } from '../entities/report-user.entity';
import { ReportEnum } from '../../enum/ReportEnum';

@InputType()
export class UpdateReportUserInput extends PartialType(ReportUser) {
  @Field()
  id: number;

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
