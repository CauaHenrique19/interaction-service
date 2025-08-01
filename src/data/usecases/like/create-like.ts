import { CreateLikeRepository } from '@interaction-service/data/protocols/db';
import { MessageBroker } from '@interaction-service/data/protocols/message-broker/message-broker';
import { CreateLikeUseCase } from '@interaction-service/domain/usecases';

export class CreateLike implements CreateLikeUseCase {
  constructor(
    private readonly createLikeRepository: CreateLikeRepository,
    private readonly messageBroker: MessageBroker,
  ) {}

  async create(
    parameters: CreateLikeUseCase.Parameters,
  ): Promise<CreateLikeUseCase.Result> {
    const like: CreateLikeRepository.Parameters = {
      userId: parameters.userId,
      reviewId: parameters.reviewId,
      createdAt: new Date(),
    };

    const createdLike = await this.createLikeRepository.create(like);
    await this.messageBroker.sendMessage({
      topicName: 'created_like',
      message: createdLike,
    });

    return createdLike;
  }
}
