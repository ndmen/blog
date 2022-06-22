import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDo } from 'src/_schemas/comment.do';

export class CommentsRepository {
  constructor(
    @InjectModel('Comment')
    private commentModel: Model<CommentDo>,
  ) {}

  async createOne(comment): Promise<any> {
    const createOne = await this.commentModel.create(comment);
    return createOne;
  }

  async findOne(id): Promise<any> {
    const findOne = await this.commentModel.find({ post_id: id });
    return findOne;
  }
}
