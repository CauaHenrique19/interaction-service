import { CommentModel } from '@interaction-service/domain/entities';

export interface CreateCommentRepository {
  create(
    parameters: CreateCommentRepository.Parameters,
  ): Promise<CreateCommentRepository.Result>;
}

export namespace CreateCommentRepository {
  export type Parameters = Omit<CommentModel, 'id'>;
  export type Result = CommentModel;
}
