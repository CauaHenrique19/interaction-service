import { LikeModel } from '@interaction-service/domain/entities';

export interface DeleteLikeRepository {
  delete(
    parameters: DeleteLikeRepository.Parameters,
  ): Promise<DeleteLikeRepository.Result>;
}

export namespace DeleteLikeRepository {
  export type Parameters = Pick<LikeModel, 'id'>;
  export type Result = void;
}
