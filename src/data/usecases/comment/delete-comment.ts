import {
  DeleteCommentRepository,
  FindCommentByIdRepository,
} from '@interaction-service/data/protocols/db';
import { MessageBroker } from '@interaction-service/data/protocols/message-broker/message-broker';
import { CommentNotFoundError } from '@interaction-service/domain/errors';
import { DeleteCommentUseCase } from '@interaction-service/domain/usecases';

export class DeleteComment implements DeleteCommentUseCase {
  constructor(
    private readonly findCommentByIdRepository: FindCommentByIdRepository,
    private readonly deleteCommentRepository: DeleteCommentRepository,
    private readonly messageBroker: MessageBroker,
  ) {}

  async delete(
    parameters: DeleteCommentUseCase.Parameters,
  ): Promise<DeleteCommentUseCase.Result> {
    const comment = await this.findCommentByIdRepository.findById(parameters);

    if (!comment) {
      throw new CommentNotFoundError();
    }

    await this.deleteCommentRepository.delete(parameters);
    await this.messageBroker.sendMessage({
      message: comment,
      topicName: 'deleted_comment',
    });
  }
}
