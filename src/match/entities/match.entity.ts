import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
@ObjectType()
export class Match {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.matchedOnSwipe)
  @JoinColumn({ name: 'swipedLastId' })
  swipedLast: User;

  @Field()
  @Column()
  swipedLastId!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.matchedAfterSwipe)
  @JoinColumn({ name: 'swipedFirstId' })
  swipedFirst!: string;

  @Field()
  @Column()
  swipedFirstId!: number;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field()
  @Column({ default: false })
  unmatched: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modifiedDate: Date;
}
