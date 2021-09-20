import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportUserInput } from './dto/create-report-user.input';
import { UpdateReportUserInput } from './dto/update-report-user.input';
import { ReportUser } from './entities/report-user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class ReportUserService {
  constructor(
    @InjectRepository(ReportUser) private repository: Repository<ReportUser>,
    private userService: UserService,
  ) {}

  async create(data: CreateReportUserInput) {
    try {
      const report = this.repository.create(data);
      return await this.repository.save(report);
    } catch (e) {
      return null;
    }
  }

  async findAll(): Promise<ReportUser[]> {
    try {
      const reports = await this.repository.find();
      return reports;
    } catch (e) {
      return [];
    }
  }

  async findOne(id: number): Promise<ReportUser> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      return null;
    }
  }

  async findReportsAgainstUser(id: number): Promise<ReportUser[]> {
    try {
      return await this.repository.find({ where: { accusedId: id } });
    } catch (e) {
      return [];
    }
  }

  async findReportsByUser(id: number): Promise<ReportUser[]> {
    try {
      return await this.repository.find({ where: { reporterId: id } });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async update(id: number, data: UpdateReportUserInput): Promise<ReportUser> {
    try {
      const report = await this.findOne(id);
      //Object.assign(report, data);
      return await this.repository.save(report);
    } catch (e) {
      return null;
    }
  }

  async remove(id: number): Promise<ReportUser> {
    try {
      const report = await this.findOne(id);
      return await this.repository.remove(report);
    } catch (e) {
      return null;
    }
  }
}
