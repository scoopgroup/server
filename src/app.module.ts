import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { User } from './user/entities/user.entity';
import { Swipe } from './swipe/entities/swipe.entity';
import { ReportUser } from './report-user/entities/report-user.entity';
import { PhotoRating } from './photo-rating/entities/photo-rating.entity';
import { Message } from './message/entities/message.entity';
import { Match } from './match/entities/match.entity';
import { FileEntity } from './file-entity/entities/file-entity.entity';
import { PhotoRatingCriteriaOption } from './photo-rating-criteria/entities/photo-rating-criteria-option.entity';
import { Photo } from './photo/entities/photo.entity';
import { HeightOption } from './height-option/entities/height-option.entity';

import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { SwipeModule } from './swipe/swipe.module';
import { PhotoModule } from './photo/photo.module';
import { ReportUserModule } from './report-user/report-user.module';
import { PhotoRatingModule } from './photo-rating/photo-rating.module';
import { MessageModule } from './message/message.module';
import { MatchModule } from './match/match.module';
import { FileEntityModule } from './file-entity/file-entity.module';
import { PhotoRatingCriteriaOptionModule } from './photo-rating-criteria/photo-rating-criteria-option.module';
import { HeightOptionModule } from './height-option/height-option.module';
import { UserService } from './user/user.service';
import { SwipeService } from './swipe/swipe.service';
import { PhotoService } from './photo/photo.service';
import { PhotoRatingService } from './photo-rating/photo-rating.service';
import { MessageService } from './message/message.service';
import { MatchService } from './match/match.service';
import { FileEntityService } from './file-entity/file-entity.service';
import { PhotoRatingCriteriaOptionService } from './photo-rating-criteria/photo-rating-criteria.service';
import { HeightOptionService } from './height-option/height-option.service';
import { AuthModule } from './auth/auth.module';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot(config),
  // TypeOrmModule.forFeature([
  //   User, Swipe, ReportUser, Photo, PhotoRating, PhotoRatingCriteria,
  //   Message, Match, FileEntity, HeightOption
  // ]),
  // ],

  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'src/schema.gql',
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, // no need to import ConfigModule in other modules
    }),
    TypeOrmModule.forRoot(config().database),
    UserModule,
    SwipeModule,
    SwipeModule,
    ReportUserModule,
    PhotoModule,
    PhotoRatingModule,
    PhotoRatingCriteriaOptionModule,
    FileEntityModule,
    HeightOptionModule,
    MessageModule,
    MatchModule,
    TypeOrmModule.forFeature([
      User,
      Swipe,
      ReportUser,
      Photo,
      PhotoRating,
      PhotoRatingCriteriaOption,
      FileEntity,
      HeightOption,
      Message,
      Match,
    ]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
  // , UserService, SwipeService, PhotoService, PhotoRatingService,
  //   MessageService, MatchService, FileEntityService, PhotoRatingOptionCriteriaService, HeightOptionService]
})
export class AppModule {}
