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
export class Message {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.sentMessages)
  @JoinColumn({ name: 'senderId' })
  sender: User;

  @Field()
  @Column()
  senderId!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.receivedMessages)
  @JoinColumn({ name: 'receiverId' })
  receiver: User;

  @Field()
  @Column()
  receiverId!: number;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  text: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modifiedDate: Date;

  @Field()
  @Column()
  sentDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  readDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  revokedDate: Date;
}
