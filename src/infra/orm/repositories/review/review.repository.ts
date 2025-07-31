import { EntityTarget, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import {
  CreateReviewRepository,
  DeleteReviewRepository,
  findReviewByIdRepository,
} from '@interaction-service/data/protocols/db';
import { Review } from '@interaction-service/infra/orm/entities';
import { REVIEW_REPOSITORY } from '@interaction-service/infra/orm/typeorm/typeorm.repositories';
import { AppDataSource } from '@interaction-service/infra/orm/typeorm/data-source';
import { StatusEnum } from '@interaction-service/domain/enums';

export class ReviewRepository
  implements
    CreateReviewRepository,
    DeleteReviewRepository,
    findReviewByIdRepository
{
  private readonly reviewRepository: Repository<Review>;

  constructor(
    @Inject(REVIEW_REPOSITORY)
    private readonly Review: EntityTarget<Review>,
  ) {
    this.reviewRepository = AppDataSource.getRepository(this.Review);
  }

  async findById(
    parameters: findReviewByIdRepository.Parameters,
  ): Promise<findReviewByIdRepository.Result> {
    return this.reviewRepository.findOne({
      where: {
        id: parameters.id,
      },
    });
  }

  async create(
    parameters: CreateReviewRepository.Parameters,
  ): Promise<CreateReviewRepository.Result> {
    const review = new Review();
    Object.assign(review, parameters);

    await this.reviewRepository.save(review);
    return review;
  }

  async delete(
    parameters: DeleteReviewRepository.Parameters,
  ): Promise<DeleteReviewRepository.Result> {
    await this.reviewRepository.update(
      { id: parameters.id },
      { status: StatusEnum.INACTIVE },
    );
  }
}
