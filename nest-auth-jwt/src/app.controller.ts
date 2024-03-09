import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // constructor(private readonly authService: AuthService) {}


 
  // GET /Protected
  @Get()
  getHell() { // TODO: require a Bearer token, validate token
    return 'here'; //this.appService.getHello();
  }
}

