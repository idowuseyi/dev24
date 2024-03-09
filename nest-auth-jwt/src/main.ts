import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'keyboard cat', // put in an .env file. then dont use in memory for production there can be a memory leak. You can use redis
      resave: false,
      saveUnitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
