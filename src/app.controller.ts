import { Post, Get, Controller, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local.auth.guard';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  @Post('signup')
  signup(@Request() req): any {
    return this.userService.create(req.body);
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  protected(): any {
    return this.userService.findAll();
  }
}
