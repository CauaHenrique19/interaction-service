import { DeleteLikeRepository } from '@interaction-service/data/protocols/db';
import { DeleteLikeUseCase } from '@interaction-service/domain/usecases';

export class DeleteLike implements DeleteLikeUseCase {
  constructor(private readonly deleteLikeRepository: DeleteLikeRepository) {}

  async delete(
    parameters: DeleteLikeUseCase.Parameters,
  ): Promise<DeleteLikeUseCase.Result> {
    await this.deleteLikeRepository.delete(parameters);
  }
}
