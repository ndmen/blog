import { Types } from 'mongoose';

export class PostDo {
  _id: Types.ObjectId;
  title: string;
  description: string;
  author: string;

  constructor(props: Partial<PostDo>) {
    this._id = props._id;
    this.title = props.title || null;
    this.description = props.description || null;
    this.author = props.author || null;
  }
}
