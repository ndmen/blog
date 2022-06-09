import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDo } from 'src/_schemas/post.do';

export class PostsRepository {
  constructor(
    @InjectModel('Post')
    private postModel: Model<PostDo>,
  ) {}

  async createOne(post): Promise<any> {
    const createOne = await this.postModel.create(post);
    return createOne;
  }

  async findAll(): Promise<any> {
    const findAll = await this.postModel.find();
    return findAll;
  }

  async findOne(id): Promise<any> {
    const findOne = await this.postModel.findById(id);
    return findOne;
  }

  async update(id, post): Promise<any> {
    const update = await this.postModel.findByIdAndUpdate(id, post);
    return update;
  }

  async remove(id): Promise<any> {
    const remove = await this.postModel.findByIdAndDelete(id);
    return remove;
  }
}
