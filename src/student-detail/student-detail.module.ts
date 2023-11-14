import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentDetailService } from './student-detail.service';
import { StudentDetailController } from './student-detail.controller';
import { StudentDetail, StudentDetailSchema } from './student.schema';
import { StudentDetailRepository } from './student.repos';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentDetail.name, schema: StudentDetailSchema },
    ]),
  ],
  controllers: [StudentDetailController],
  providers: [StudentDetailService, StudentDetailRepository],
})
export class StudentDetailModule {}
