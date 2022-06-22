import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, SchemaTypes } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ versionKey: false, timestamps: true })
export class Post {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  categories: [string];

  @Prop({ ref: 'User', type: SchemaTypes.ObjectId })
  author: Types.ObjectId;

  @Prop()
  likes: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
