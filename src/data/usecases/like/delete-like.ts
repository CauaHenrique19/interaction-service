import {
  DeleteLikeRepository,
  FindLikeByIdRepository,
} from '@interaction-service/data/protocols/db';
import { MessageBroker } from '@interaction-service/data/protocols/message-broker/message-broker';
import { LikeNotFoundError } from '@interaction-service/domain/errors';
import { DeleteLikeUseCase } from '@interaction-service/domain/usecases';

export class DeleteLike implements DeleteLikeUseCase {
  constructor(
    private readonly findLikeByIdRepository: FindLikeByIdRepository,
    private readonly deleteLikeRepository: DeleteLikeRepository,
    private readonly messageBroker: MessageBroker,
  ) {}

  async delete(
    parameters: DeleteLikeUseCase.Parameters,
  ): Promise<DeleteLikeUseCase.Result> {
    const like = await this.findLikeByIdRepository.findById(parameters);

    if (!like) {
      throw new LikeNotFoundError();
    }

    await this.deleteLikeRepository.delete(parameters);
    await this.messageBroker.sendMessage({
      topicName: 'deleted_like',
      message: like,
    });
  }
}
