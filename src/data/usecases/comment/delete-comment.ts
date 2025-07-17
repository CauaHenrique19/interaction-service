import { DeleteCommentRepository } from '@interaction-service/data/protocols/db';
import { DeleteCommentUseCase } from '@interaction-service/domain/usecases';

export class DeleteComment implements DeleteCommentUseCase {
  constructor(
    private readonly deleteCommentRepository: DeleteCommentRepository,
  ) {}

  async delete(
    parameters: DeleteCommentUseCase.Parameters,
  ): Promise<DeleteCommentUseCase.Result> {
    await this.deleteCommentRepository.delete(parameters);
  }
}
