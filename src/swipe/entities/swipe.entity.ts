import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SwipeEnum } from '../../enum/SwipeEnum';
import { User } from '../../user/entities/user.entity';

@Entity()
@ObjectType()
export class Swipe {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.swipedBy)
  @JoinColumn({ name: 'swiperId' })
  swiper: User;

  @Field()
  @Column()
  swiperId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.swipes)
  @JoinColumn({ name: 'shownUserId' })
  shownUser: User;

  @Field()
  @Column()
  shownUserId: number;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field(() => SwipeEnum)
  @Column({
    type: 'enum',
    enum: SwipeEnum,
  })
  decision!: SwipeEnum;
}
