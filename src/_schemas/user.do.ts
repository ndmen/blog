import { Types } from 'mongoose';

export class UserDo {
  _id: Types.ObjectId;
  username: string;
  password: string;

  constructor(props: Partial<UserDo>) {
    this._id = props._id;
    this.username = props.username || null;
    this.password = props.password || null;
  }
}
