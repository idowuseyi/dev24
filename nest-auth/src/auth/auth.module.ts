import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, PassportModule.register({session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer]
})

// @Module({
//   imports: [UsersModule, PassportModule, JwtModule.register({
//     secret: 'SECRET', // Put in .env file
//   })],
//   providers: [AuthService, LocalStrategy],
//   exports: [AuthService]
// })

export class AuthModule {}
