import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { PhotoRating } from '../../photo-rating/entities/photo-rating.entity';

@Entity()
@ObjectType()
export class Photo {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.photos)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field()
  @Column()
  userId: number;

  @Field(() => [PhotoRating])
  @OneToMany(() => PhotoRating, (rating) => rating.photo)
  photoRatings: PhotoRating[];

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field()
  @Column()
  index: number;

  @Field(() => String)
  @Column()
  image: string;

  @Field()
  @UpdateDateColumn()
  modifiedDate: Date;

  @Field()
  @Column({ default: true })
  visible: boolean;

  @Field()
  @Column({ default: false })
  archived: boolean;
}
