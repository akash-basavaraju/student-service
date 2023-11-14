import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentDetailService } from './student-detail.service';
import { CreateStudentDetailDto } from './dto/create-student-detail.dto';
import { UpdateStudentDetailDto } from './dto/update-student-detail.dto';

@Controller('student-detail')
export class StudentDetailController {
  constructor(private readonly studentDetailService: StudentDetailService) {}

  @Post()
  create(@Body() createStudentDetailDto: CreateStudentDetailDto) {
    return this.studentDetailService.create(createStudentDetailDto);
  }

  @Get()
  findAll() {
    return this.studentDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDetailDto: UpdateStudentDetailDto) {
    return this.studentDetailService.update(+id, updateStudentDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentDetailService.remove(+id);
  }
}
