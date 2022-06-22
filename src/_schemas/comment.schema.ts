import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, SchemaTypes } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({ versionKey: false, timestamps: true })
export class Comment {
  @Prop({ ref: 'Post', type: SchemaTypes.ObjectId })
  post_id: Types.ObjectId;

  @Prop()
  comment: string;

  @Prop({ ref: 'User', type: SchemaTypes.ObjectId })
  author: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
