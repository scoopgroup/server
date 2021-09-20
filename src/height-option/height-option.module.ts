import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeightOptionService } from './height-option.service';
import { HeightOption } from './entities/height-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeightOption])],
  providers: [HeightOptionService],
  exports: [HeightOptionService],
})
export class HeightOptionModule {}
