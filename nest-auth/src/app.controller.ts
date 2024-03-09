import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // constructor(private readonly authService: AuthService) {}


  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return {msg: "Logged In!"}; // TODO return JWT acess token
  }
 
  // GET /Protected
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string { // TODO: require a Bearer token, validate token
    return req.user; //this.appService.getHello();
  }
}
