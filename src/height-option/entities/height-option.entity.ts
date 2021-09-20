import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class HeightOption {
  @Field()
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  inches: number;

  @Field()
  @Column()
  display: string;
}
