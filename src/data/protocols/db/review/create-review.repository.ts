import { ReviewModel } from '@interaction-service/domain/entities';

export interface CreateReviewRepository {
  create(
    parameters: CreateReviewRepository.Parameters,
  ): Promise<CreateReviewRepository.Result>;
}

export namespace CreateReviewRepository {
  export type Parameters = Omit<ReviewModel, 'id'>;
  export type Result = ReviewModel;
}
