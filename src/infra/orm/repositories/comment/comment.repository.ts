import { EntityTarget, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import {
  CreateCommentRepository,
  DeleteCommentRepository,
} from '@interaction-service/data/protocols/db';
import { Comment } from '@interaction-service/infra/orm/entities';
import { COMMENT_REPOSITORY } from '@interaction-service/infra/orm/typeorm/typeorm.repositories';
import { AppDataSource } from '@interaction-service/infra/orm/typeorm/data-source';

export class CommentRepository
  implements CreateCommentRepository, DeleteCommentRepository
{
  private readonly commentRepository: Repository<Comment>;

  constructor(
    @Inject(COMMENT_REPOSITORY)
    private readonly Comment: EntityTarget<Comment>,
  ) {
    this.commentRepository = AppDataSource.getRepository(this.Comment);
  }

  async create(
    parameters: CreateCommentRepository.Parameters,
  ): Promise<CreateCommentRepository.Result> {
    const comment = new Comment();
    Object.assign(comment, parameters);

    await this.commentRepository.save(comment);
    return comment;
  }

  async delete(
    parameters: DeleteCommentRepository.Parameters,
  ): Promise<DeleteCommentRepository.Result> {
    await this.commentRepository.delete({ id: parameters.id });
  }
}
