import { CreateReviewRepository } from '@interaction-service/data/protocols/db';
import { StatusEnum } from '@interaction-service/domain/enums';
import { CreateReviewUseCase } from '@interaction-service/domain/usecases';

export class CreateReview implements CreateReviewUseCase {
  constructor(
    private readonly createReviewRepository: CreateReviewRepository,
  ) {}

  async create(
    parameters: CreateReviewUseCase.Parameters,
  ): Promise<CreateReviewUseCase.Result> {
    const review: CreateReviewRepository.Parameters = {
      userId: parameters.userId,
      stars: parameters.stars,
      content: parameters.content,
      mediaId: parameters.mediaId,
      status: StatusEnum.ACTIVE,
      createdAt: new Date(),
    };

    const createdReview = await this.createReviewRepository.create(review);
    return createdReview;
  }
}
