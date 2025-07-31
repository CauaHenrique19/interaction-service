import { ReviewModel } from '@interaction-service/domain/entities';

export interface findReviewByIdRepository {
  findById(
    parameters: findReviewByIdRepository.Parameters,
  ): Promise<findReviewByIdRepository.Result>;
}

export namespace findReviewByIdRepository {
  export type Parameters = Pick<ReviewModel, 'id'>;
  export type Result = ReviewModel | null;
}
