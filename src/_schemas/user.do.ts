import { Types } from 'mongoose';

export class UserDo {
  _id: Types.ObjectId;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  bio: string;
  role: string;
  passwordSalt: string | null;

  constructor(props: Partial<UserDo>) {
    this._id = props._id;
    this.username = props.username || null;
    this.password = props.password || null;
    this.firstname = props.firstname || null;
    this.lastname = props.lastname || null;
    this.bio = props.bio || null;
    this.role = props.role || null;
    this.passwordSalt = props.passwordSalt || null;
  }
}
