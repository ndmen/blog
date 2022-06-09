import { Types } from 'mongoose';

export class UserDo {
  _id: Types.ObjectId;
  login: string;
  password: string;

  constructor(props: Partial<UserDo>) {
    this._id = props._id;
    this.login = props.login || null;
    this.password = props.password || null;
  }
}
