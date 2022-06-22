import { Types } from 'mongoose';

export class CommentDo {
  _id: Types.ObjectId;
  comment: string;
  author: Types.ObjectId;

  constructor(props: Partial<CommentDo>) {
    this._id = props._id;
    this.comment = props.comment || null;
    this.author = props.author || null;
  }
}
