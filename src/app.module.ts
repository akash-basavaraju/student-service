import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentDetailModule } from './student-detail/student-detail.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/student-detail'),
    StudentDetailModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
