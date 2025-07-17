import { CommentModel } from '@interaction-service/domain/entities';

export interface DeleteCommentUseCase {
  delete(
    parameters: DeleteCommentUseCase.Parameters,
  ): Promise<DeleteCommentUseCase.Result>;
}

export namespace DeleteCommentUseCase {
  export type Parameters = Pick<CommentModel, 'id'>;
  export type Result = void;
}
