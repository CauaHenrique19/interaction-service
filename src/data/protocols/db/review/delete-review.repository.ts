import { ReviewModel } from '@interaction-service/domain/entities';

export interface DeleteReviewRepository {
  delete(
    parameters: DeleteReviewRepository.Parameters,
  ): Promise<DeleteReviewRepository.Result>;
}

export namespace DeleteReviewRepository {
  export type Parameters = Pick<ReviewModel, 'id'>;
  export type Result = void;
}
