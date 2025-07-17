import { LikeModel } from '@interaction-service/domain/entities';

export interface CreateLikeUseCase {
  create(
    parameters: CreateLikeUseCase.Parameters,
  ): Promise<CreateLikeUseCase.Result>;
}

export namespace CreateLikeUseCase {
  export type Parameters = Pick<LikeModel, 'reviewId' | 'userId'>;
  export type Result = LikeModel;
}
