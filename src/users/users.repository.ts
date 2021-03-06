import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDo } from 'src/_schemas/user.do';

export class UsersRepository {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDo>,
  ) {}

  async createOne(user): Promise<any> {
    const createOne = await this.userModel.create(user);
    return createOne;
  }

  async findOne(username): Promise<any> {
    const findOne = await this.userModel.findOne({ username: username });
    return findOne;
  }

  async findOneById(id): Promise<any> {
    const findOne = await this.userModel.findById(id);
    return findOne;
  }
}
