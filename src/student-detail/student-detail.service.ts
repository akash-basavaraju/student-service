import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateStudentDetailDto } from './dto/create-student-detail.dto';
import { UpdateStudentDetailDto } from './dto/update-student-detail.dto';
import { StudentDetailRepository } from './student.repos';

@Injectable()
export class StudentDetailService {
  constructor(
    private readonly studentRepo: StudentDetailRepository,
    private readonly httpService: HttpService,
  ) {}

  async create(createStudentDetailDto: CreateStudentDetailDto) {
    const resp = await this.httpService.axiosRef.get(
      `http://0.0.0.0:9000/user/${createStudentDetailDto.userId}`,
    );
    console.log(resp.data);
    if (resp.data) {
      return this.studentRepo.create(createStudentDetailDto);
    }
    await this.httpService.axiosRef.post(`http://0.0.0.0:9000/user`, {
      userId: createStudentDetailDto.userId
        ? createStudentDetailDto.userId
        : Date.now(),
      userName: createStudentDetailDto.studentName,
    });

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
