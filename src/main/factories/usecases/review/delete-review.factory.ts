import { Provider } from '@nestjs/common';

import { DELETE_REVIEW_FACTORY } from '@interaction-service/main/factories/providers';
import { DeleteReviewUseCase } from '@interaction-service/domain/usecases';
import { DeleteReview } from '@interaction-service/data/usecases';
import { ReviewRepository } from '@interaction-service/infra/orm/repositories';
import { KafkaMessageBrokerAdapter } from '@interaction-service/infra/kafka/adapter';

export const deleteReviewFactory: Provider = {
  provide: DELETE_REVIEW_FACTORY,
  useFactory: (
    reviewRepository: ReviewRepository,
    kafkaMessageBrokerAdapter: KafkaMessageBrokerAdapter,
  ): DeleteReviewUseCase => {
    return new DeleteReview(
      reviewRepository,
      reviewRepository,
      kafkaMessageBrokerAdapter,
    );
  },
  inject: [ReviewRepository, KafkaMessageBrokerAdapter],
};
