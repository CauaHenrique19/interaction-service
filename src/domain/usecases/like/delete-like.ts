import { LikeModel } from '@interaction-service/domain/entities';

export interface DeleteLikeUseCase {
  delete(
    parameters: DeleteLikeUseCase.Parameters,
  ): Promise<DeleteLikeUseCase.Result>;
}

export namespace DeleteLikeUseCase {
  export type Parameters = Pick<LikeModel, 'id'>;
  export type Result = void;
}
