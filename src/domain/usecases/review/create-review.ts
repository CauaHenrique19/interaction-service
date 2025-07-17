import { ReviewModel } from '@interaction-service/domain/entities';

export interface CreateReviewUseCase {
  create(
    parameters: CreateReviewUseCase.Parameters,
  ): Promise<CreateReviewUseCase.Result>;
}

export namespace CreateReviewUseCase {
  export type Parameters = Pick<
    ReviewModel,
    'userId' | 'mediaId' | 'content' | 'stars'
  >;
  export type Result = ReviewModel;
}
