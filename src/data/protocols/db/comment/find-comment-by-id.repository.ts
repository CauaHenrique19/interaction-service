import { CommentModel } from '@interaction-service/domain/entities';

export interface FindCommentByIdRepository {
  findById(
    parameters: FindCommentByIdRepository.Parameters,
  ): Promise<FindCommentByIdRepository.Result>;
}

export namespace FindCommentByIdRepository {
  export type Parameters = Pick<CommentModel, 'id'>;
  export type Result = CommentModel | null;
}
