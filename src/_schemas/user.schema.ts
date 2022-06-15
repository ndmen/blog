import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop({ required: true, index: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  passwordSalt: string | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
