import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { StudentDetail, StudentDetailDocument } from './student.schema';

@Injectable()
export class StudentDetailRepository {
  constructor(
    @InjectModel(StudentDetail.name)
    private StudentModel: Model<StudentDetailDocument>,
  ) {}

  async findOne(StudentFilterQuery: FilterQuery<StudentDetail>) {
    return this.StudentModel.findOne(StudentFilterQuery);
  }

  async findAll() {
    return this.StudentModel.find();
  }

  async create(Student: StudentDetail) {
    const StudentModel = new this.StudentModel(Student);
    return StudentModel.save();
  }

  async remove(StudentQueryFilter: FilterQuery<StudentDetail>) {
    return this.StudentModel.deleteOne(StudentQueryFilter);
  }

  async findOneAndUpdate(
    StudentQueryFilter: FilterQuery<StudentDetail>,
    Student: Partial<StudentDetail>,
  ) {
    return this.StudentModel.findOneAndUpdate(StudentQueryFilter, Student);
  }
}
