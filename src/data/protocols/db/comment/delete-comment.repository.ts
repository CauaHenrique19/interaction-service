import { CommentModel } from '@interaction-service/domain/entities';

export interface DeleteCommentRepository {
  delete(
    parameters: DeleteCommentRepository.Parameters,
  ): Promise<DeleteCommentRepository.Result>;
}

export namespace DeleteCommentRepository {
  export type Parameters = Pick<CommentModel, 'id'>;
  export type Result = void;
}
