import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column } from 'typeorm';
import { PhotoRatingCriteriaEnum } from '../../enum/PhotoRatingEnum';

@Entity()
@ObjectType()
export class PhotoRatingCriteriaOption {
  @Field(() => PhotoRatingCriteriaEnum)
  @PrimaryColumn()
  id!: PhotoRatingCriteriaEnum;

  @Field()
  @Column()
  name: number;

  @Field()
  @Column()
  description: string;
}
