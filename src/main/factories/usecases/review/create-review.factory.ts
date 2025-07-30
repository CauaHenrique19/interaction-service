import { Provider } from '@nestjs/common';

import { CREATE_REVIEW_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateReviewUseCase } from '@interaction-service/domain/usecases';
import { CreateReview } from '@interaction-service/data/usecases';
import { ReviewRepository } from '@interaction-service/infra/orm/repositories';
import { KafkaMessageBrokerAdapter } from '@interaction-service/infra/kafka/adapter';

export const createReviewFactory: Provider = {
  provide: CREATE_REVIEW_FACTORY,
  useFactory: (
    reviewRepository: ReviewRepository,
    kafkaMessageBrokerAdapter: KafkaMessageBrokerAdapter,
  ): CreateReviewUseCase => {
    return new CreateReview(reviewRepository, kafkaMessageBrokerAdapter);
  },
  inject: [ReviewRepository, KafkaMessageBrokerAdapter],
};
