import { EntityTarget, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import {
  CreateLikeRepository,
  DeleteLikeRepository,
  FindLikeByIdRepository,
} from '@interaction-service/data/protocols/db';
import { Like } from '@interaction-service/infra/orm/entities';
import { LIKE_REPOSITORY } from '@interaction-service/infra/orm/typeorm/typeorm.repositories';
import { AppDataSource } from '@interaction-service/infra/orm/typeorm/data-source';

export class LikeRepository
  implements CreateLikeRepository, DeleteLikeRepository, FindLikeByIdRepository
{
  private readonly likeRepository: Repository<Like>;

  constructor(
    @Inject(LIKE_REPOSITORY)
    private readonly Like: EntityTarget<Like>,
  ) {
    this.likeRepository = AppDataSource.getRepository(this.Like);
  }

  async findById(
    parameters: FindLikeByIdRepository.Parameters,
  ): Promise<FindLikeByIdRepository.Result> {
    return await this.likeRepository.findOne({
      where: {
        id: parameters.id,
      },
      relations: {
        review: parameters.includeReview,
      },
    });
  }

  async create(
    parameters: CreateLikeRepository.Parameters,
  ): Promise<CreateLikeRepository.Result> {
    const like = new Like();
    Object.assign(like, parameters);

    await this.likeRepository.save(like);
    return like;
  }

  async delete(
    parameters: DeleteLikeRepository.Parameters,
  ): Promise<DeleteLikeRepository.Result> {
    await this.likeRepository.delete({ id: parameters.id });
  }
}
