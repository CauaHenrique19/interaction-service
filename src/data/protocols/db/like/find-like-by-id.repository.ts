import { LikeModel } from '@interaction-service/domain/entities';

export interface FindLikeByIdRepository {
  findById(
    parameters: FindLikeByIdRepository.Parameters,
  ): Promise<FindLikeByIdRepository.Result>;
}

export namespace FindLikeByIdRepository {
  export type Parameters = Pick<LikeModel, 'id'>;
  export type Result = LikeModel | null;
}
