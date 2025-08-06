import {
  CreateCommentRepository,
  findReviewByIdRepository,
} from '@interaction-service/data/protocols/db';
import { MessageBroker } from '@interaction-service/data/protocols/message-broker/message-broker';
import { ReviewNotFoundError } from '@interaction-service/domain/errors';
import { CreateCommentUseCase } from '@interaction-service/domain/usecases';

export class CreateComment implements CreateCommentUseCase {
  constructor(
    private readonly findReviewByIdRepository: findReviewByIdRepository,
    private readonly createCommentRepository: CreateCommentRepository,
    private readonly messageBroker: MessageBroker,
  ) {}

  async create(
    parameters: CreateCommentUseCase.Parameters,
  ): Promise<CreateCommentUseCase.Result> {
    const review = await this.findReviewByIdRepository.findById({
      id: parameters.reviewId,
    });

    if (!review) {
      throw new ReviewNotFoundError();
    }

    const comment: CreateCommentRepository.Parameters = {
      content: parameters.content,
      userId: parameters.userId,
      reviewId: parameters.reviewId,
      createdAt: new Date(),
    };

    const createdComment = await this.createCommentRepository.create(comment);
    await this.messageBroker.sendMessage({
      topicName: 'created_comment',
      message: {
        ...createdComment,
        review,
      },
    });

    return createdComment;
  }
}
