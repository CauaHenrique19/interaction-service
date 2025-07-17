import { LikeModel } from '@interaction-service/domain/entities';

export interface CreateLikeRepository {
  create(
    parameters: CreateLikeRepository.Parameters,
  ): Promise<CreateLikeRepository.Result>;
}

export namespace CreateLikeRepository {
  export type Parameters = Omit<LikeModel, 'id'>;
  export type Result = LikeModel;
}
