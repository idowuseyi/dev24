import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { MyLoggerService } from './my-logger/my-logger.service';
import { AllExceptionsFilter } from './all-exceptions.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  app.enableCors()
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();


// we use the logger service globally, in the above we will use it only on some services
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     bufferLogs: true,
//   });
//   app.useLogger(app.get(MyLoggerService))
//   app.enableCors()
//   app.setGlobalPrefix('api')
//   await app.listen(3000);
// }
// bootstrap();
