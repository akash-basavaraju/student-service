import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDetailDocument = StudentDetail & Document;

@Schema()
export class StudentDetail {
  @Prop()
  userId: number;

  @Prop()
  studentClass: string;

  @Prop()
  isVaccinated: boolean;

  @Prop()
  vaccineDate: string;
}

export const StudentDetailSchema = SchemaFactory.createForClass(StudentDetail);
