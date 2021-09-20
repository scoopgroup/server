import { ObjectType, Field, ID, Root } from '@nestjs/graphql';
import { EncryptionTransformer } from 'typeorm-encrypted';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { GenderEnum } from '../../enum/GenderEnum';
import { Photo } from '../../photo/entities/photo.entity';
import { PhotoRating } from '../../photo-rating/entities/photo-rating.entity';
import { Swipe } from '../../swipe/entities/swipe.entity';
import { Match } from '../../match/entities/match.entity';
import { Message } from '../../message/entities/message.entity';
import { ReportUser } from '../../report-user/entities/report-user.entity';

function getAge(dateString) {
  try {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  } catch (e) {
    return null;
  }
}

@Entity()
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastname?: string;

  @Field(() => String)
  name(@Root() parent: User): string {
    return `${parent.firstname} ${parent.lastname}`.trim();
  }

  @Field()
  @Column({ unique: true })
  email!: string;

  // TODO: key stored in env
  @Column({
    transformer: new EncryptionTransformer({
      key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
      algorithm: 'aes-256-cbc',
      ivLength: 16,
      iv: 'ff5ac19190424b1d88f9419ef949ae56',
    }),
  })
  password!: string;

  @Field()
  @Column()
  aboutMe: string;

  // accountStatus
  @Field()
  @Column({ default: true })
  enabled: boolean;

  @Field(() => GenderEnum, { nullable: true })
  @Column({
    type: 'enum',
    enum: GenderEnum,
    nullable: true,
  })
  gender: GenderEnum;

  // "genders matches wants to match with, used when user gender is neither female or male"
  // @Field()
  // @Column({
  //   type: "enum",
  //   enum: GenderEnum
  // })
  // showMeToThoseLookingFor: GenderEnum[];

  // "genders user wants to match with"
  @Field(() => [GenderEnum], { nullable: true })
  @Column({
    type: 'enum',
    enum: GenderEnum,
    nullable: true,
  })
  lookingForGender: GenderEnum[];

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  birthday: Date;

  @Field({ nullable: true })
  age(@Root() parent: User): number | null {
    if (this.birthday) {
      return getAge(this.birthday);
    }
    return null;
  }

  @Field({ nullable: true })
  @Column({ default: [16, 75] })
  ageRange: [number];

  @Field({ nullable: true })
  @Column({ nullable: true })
  jobTitle: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  work: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  height: number;

  @Field()
  @Column({ default: 36 })
  minHeight: number;

  @Field()
  @Column({ default: 87 })
  maxHeight: number;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field()
  @UpdateDateColumn()
  modifiedDate: Date;

  @Field(() => [Photo])
  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];

  @Field(() => [PhotoRating])
  @OneToMany(() => PhotoRating, (photoRating) => photoRating.rater)
  photoRatings: PhotoRating[];

  @Field(() => [Swipe])
  @OneToMany(() => Swipe, (swipe) => swipe.shownUser)
  swipedBy: Swipe[];

  @Field(() => [Swipe])
  @OneToMany(() => Swipe, (swipe) => swipe.swiper)
  swipes: Swipe[];

  @Field(() => [Match])
  @OneToMany(() => Match, (match) => match.swipedLast)
  matchedOnSwipe: Match[];

  @Field(() => [Match])
  @OneToMany(() => Match, (match) => match.swipedFirst)
  matchedAfterSwipe: Match[];

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @Field(() => [Message])
  @OneToMany(() => Message, (match) => match.receiver)
  receivedMessages: Message[];

  // user filed these cases
  @Field(() => [ReportUser])
  @OneToMany(() => ReportUser, (report) => report.reporter)
  userReports: ReportUser[];

  // cases where users filed cases against them
  @Field(() => [ReportUser])
  @OneToMany(() => ReportUser, (report) => report.accuser)
  accusedByReports: ReportUser[];

  // location: {type: GeoLocationType, description: "location user is searching for matches"},
  // // hometown: {type: GraphQLString},
  // school: {type: GraphQLString},
  // distance: {type: GraphQLInt, description: "distance in km for matches"},
  // ageRange: {type: [GraphQLInt]},
}
