import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Swipe } from './swipe/entities/swipe.entity';
import { ReportUser } from './report-user/entities/report-user.entity';
import { Photo } from './photo/entities/photo.entity';
import { PhotoRating } from './photo-rating/entities/photo-rating.entity';
import { Match } from './match/entities/match.entity';
import { Message } from './message/entities/message.entity';
import { FileEntity } from './file-entity/entities/file-entity.entity';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(User) private userRepository: Repository<User>,
  //   @InjectRepository(Swipe) private swipeRepository: Repository<Swipe>,
  //   @InjectRepository(ReportUser)
  //   private reportUserRepository: Repository<ReportUser>,
  //   @InjectRepository(Photo) private photoRepository: Repository<Photo>,
  //   @InjectRepository(PhotoRating)
  //   private photoRatingRepository: Repository<PhotoRating>,
  //   @InjectRepository(Message) private messageRepository: Repository<Message>,
  //   @InjectRepository(Match) private matchRepository: Repository<Match>,
  //   @InjectRepository(FileEntity)
  //   private fileEntityRepository: Repository<FileEntity>,
  // ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
