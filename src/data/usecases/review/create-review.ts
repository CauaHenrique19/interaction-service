import { CreateReviewRepository } from '@interaction-service/data/protocols/db';
import { MessageBroker } from '@interaction-service/data/protocols/message-broker/message-broker';
import { StatusEnum } from '@interaction-service/domain/enums';
import { CreateReviewUseCase } from '@interaction-service/domain/usecases';

export class CreateReview implements CreateReviewUseCase {
  constructor(
    private readonly createReviewRepository: CreateReviewRepository,
    private readonly messageBroker: MessageBroker,
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
    await this.messageBroker.sendMessage({
      topicName: 'created_review',
      message: createdReview,
    });

    return createdReview;
  }
}
