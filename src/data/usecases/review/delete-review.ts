import {
  DeleteReviewRepository,
  findReviewByIdRepository,
} from '@interaction-service/data/protocols/db';
import { MessageBroker } from '@interaction-service/data/protocols/message-broker/message-broker';
import { ReviewNotFoundError } from '@interaction-service/domain/errors';
import { DeleteReviewUseCase } from '@interaction-service/domain/usecases';

export class DeleteReview implements DeleteReviewUseCase {
  constructor(
    private readonly findReviewByIdRepository: findReviewByIdRepository,
    private readonly deleteReviewRepository: DeleteReviewRepository,
    private readonly messageBroker: MessageBroker,
  ) {}

  async delete(
    parameters: DeleteReviewUseCase.Parameters,
  ): Promise<DeleteReviewUseCase.Result> {
    const review = await this.findReviewByIdRepository.findById(parameters);

    if (!review) {
      throw new ReviewNotFoundError();
    }

    await this.deleteReviewRepository.delete(parameters);
    await this.messageBroker.sendMessage({
      topicName: 'deleted_review',
      message: review,
    });
  }
}
