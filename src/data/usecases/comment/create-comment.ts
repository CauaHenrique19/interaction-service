import { CreateCommentRepository } from '@interaction-service/data/protocols/db';
import { MessageBroker } from '@interaction-service/data/protocols/message-broker/message-broker';
import { CreateCommentUseCase } from '@interaction-service/domain/usecases';

export class CreateComment implements CreateCommentUseCase {
  constructor(
    private readonly createCommentRepository: CreateCommentRepository,
    private readonly messageBroker: MessageBroker,
  ) {}

  async create(
    parameters: CreateCommentUseCase.Parameters,
  ): Promise<CreateCommentUseCase.Result> {
    const comment: CreateCommentRepository.Parameters = {
      content: parameters.content,
      userId: parameters.userId,
      reviewId: parameters.reviewId,
      createdAt: new Date(),
    };

    const createdComment = await this.createCommentRepository.create(comment);
    await this.messageBroker.sendMessage({
      topicName: 'created_comment',
      message: createdComment,
    });

    return createdComment;
  }
}
