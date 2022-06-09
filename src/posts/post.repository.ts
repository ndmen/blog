import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDo } from 'src/_schemas/post.do';

export class PostsRepository {
  constructor(
    @InjectModel('Post')
    private postModel: Model<PostDo>,
  ) {}

  async createOne(post): Promise<any> {
    const CreateOne = await this.postModel.create(post);
    return CreateOne;
  }
}
