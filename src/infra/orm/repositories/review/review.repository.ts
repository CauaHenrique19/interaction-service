import { EntityTarget, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { CreateReviewRepository } from '@interaction-service/data/protocols/db';
import { Review } from '@interaction-service/infra/orm/entities';
import { REVIEW_REPOSITORY } from '@interaction-service/infra/orm/typeorm/typeorm.repositories';
import { AppDataSource } from '@interaction-service/infra/orm/typeorm/data-source';

export class ReviewRepository implements CreateReviewRepository {
  private readonly reviewRepository: Repository<Review>;

  constructor(
    @Inject(REVIEW_REPOSITORY)
    private readonly Review: EntityTarget<Review>,
  ) {
    this.reviewRepository = AppDataSource.getRepository(this.Review);
  }

  async create(
    parameters: CreateReviewRepository.Parameters,
  ): Promise<CreateReviewRepository.Result> {
    const review = new Review();
    Object.assign(review, parameters);

    await this.reviewRepository.save(review);
    return review;
  }
}
