import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // this can also be global but not the best design decision according to the documentation 
})
export class DatabaseModule {}
