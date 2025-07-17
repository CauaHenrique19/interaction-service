import { CreateLikeRepository } from '@interaction-service/data/protocols/db';
import { CreateLikeUseCase } from '@interaction-service/domain/usecases';

export class CreateLike implements CreateLikeUseCase {
  constructor(private readonly createLikeRepository: CreateLikeRepository) {}

  async create(
    parameters: CreateLikeUseCase.Parameters,
  ): Promise<CreateLikeUseCase.Result> {
    const like: CreateLikeRepository.Parameters = {
      userId: parameters.userId,
      reviewId: parameters.reviewId,
      createdAt: new Date(),
    };

    const createdLike = await this.createLikeRepository.create(like);
    return createdLike;
  }
}
