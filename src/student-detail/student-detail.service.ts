import { Injectable } from '@nestjs/common';
import { CreateStudentDetailDto } from './dto/create-student-detail.dto';
import { UpdateStudentDetailDto } from './dto/update-student-detail.dto';
import { StudentDetailRepository } from './student.repos';

@Injectable()
export class StudentDetailService {
  constructor(private readonly studentRepo: StudentDetailRepository) {}

  create(createStudentDetailDto: CreateStudentDetailDto) {
    return this.studentRepo.create(createStudentDetailDto);
  }

  findAll() {
    return this.studentRepo.findAll();
  }

  findOne(userId: number) {
    return this.studentRepo.findOne({ userId });
  }

  update(userId: number, updateStudentDetailDto: UpdateStudentDetailDto) {
    return this.studentRepo.findOneAndUpdate(
      { userId },
      updateStudentDetailDto,
    );
  }

  remove(userId: number) {
    return this.studentRepo.remove({ userId });
  }
}
