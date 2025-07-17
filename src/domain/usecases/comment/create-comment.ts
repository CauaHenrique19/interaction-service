import { CommentModel } from '@interaction-service/domain/entities';

export interface CreateCommentUseCase {
  create(
    parameters: CreateCommentUseCase.Parameters,
  ): Promise<CreateCommentUseCase.Result>;
}

export namespace CreateCommentUseCase {
  export type Parameters = Pick<
    CommentModel,
    'reviewId' | 'userId' | 'content'
  >;
  export type Result = CommentModel;
}
