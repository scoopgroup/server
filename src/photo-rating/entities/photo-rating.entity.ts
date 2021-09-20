import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Photo } from '../../photo/entities/photo.entity';

@Entity()
@ObjectType()
export class PhotoRating {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.photoRatings)
  @JoinColumn({ name: 'raterId' })
  rater: User;

  @Field()
  @Column()
  raterId: number;

  @Field(() => Photo)
  @ManyToOne(() => Photo, (photo) => photo.photoRatings)
  @JoinColumn({ name: 'photoId' })
  photo: Photo;

  @Field()
  @Column()
  photoId: number;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  // @Field()
  // @Column()
  // criteria: [CriteriaRating]
}
