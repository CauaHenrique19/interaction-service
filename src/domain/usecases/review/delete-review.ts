import { ReviewModel } from '@interaction-service/domain/entities';

export interface DeleteReviewUseCase {
  delete(
    parameters: DeleteReviewUseCase.Parameters,
  ): Promise<DeleteReviewUseCase.Result>;
}

export namespace DeleteReviewUseCase {
  export type Parameters = Pick<ReviewModel, 'id'>;
  export type Result = void;
}
