import { Types } from 'mongoose';

export class CommentDo {
  _id: Types.ObjectId;
  post_id: Types.ObjectId;
  comment: string;
  author: Types.ObjectId;

  constructor(props: Partial<CommentDo>) {
    this._id = props._id;
    this.post_id = props.post_id || null;
    this.comment = props.comment || null;
    this.author = props.author || null;
  }
}
