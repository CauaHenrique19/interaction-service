import { Provider } from '@nestjs/common';

import { CREATE_REVIEW_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateReviewUseCase } from '@interaction-service/domain/usecases';
import { CreateReview } from '@interaction-service/data/usecases';
import { ReviewRepository } from '@interaction-service/infra/orm/repositories';

export const createReviewFactory: Provider = {
  provide: CREATE_REVIEW_FACTORY,
  useFactory: (reviewRepository: ReviewRepository): CreateReviewUseCase => {
    return new CreateReview(reviewRepository);
  },
  inject: [ReviewRepository],
};
