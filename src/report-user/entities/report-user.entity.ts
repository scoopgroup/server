import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { ReportEnum } from '../../enum/ReportEnum';

@Entity()
@ObjectType()
export class ReportUser {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.userReports)
  @JoinColumn({ name: 'reporterId' })
  reporter: User;

  @Field()
  @Column()
  reporterId!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.accusedByReports)
  @JoinColumn({ name: 'accusedId' })
  accuser: User;

  @Field()
  @Column()
  accusedId!: number;

  @Field()
  @Column()
  createdDate: Date;

  @Field(() => ReportEnum)
  @Column()
  reason: ReportEnum;

  @Field(() => String, { nullable: true })
  @Column()
  comments: string;
}
