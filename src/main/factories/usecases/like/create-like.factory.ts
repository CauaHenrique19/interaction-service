import { Provider } from '@nestjs/common';

import { CREATE_LIKE_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateLikeUseCase } from '@interaction-service/domain/usecases';
import { CreateLike } from '@interaction-service/data/usecases';
import {
  LikeRepository,
  ReviewRepository,
} from '@interaction-service/infra/orm/repositories';
import { KafkaMessageBrokerAdapter } from '@interaction-service/infra/kafka/adapter';

export const createLikeFactory: Provider = {
  provide: CREATE_LIKE_FACTORY,
  useFactory: (
    reviewRepository: ReviewRepository,
    likeRepository: LikeRepository,
    kafkaMessageBrokerAdapter: KafkaMessageBrokerAdapter,
  ): CreateLikeUseCase => {
    return new CreateLike(
      reviewRepository,
      likeRepository,
      kafkaMessageBrokerAdapter,
    );
  },
  inject: [ReviewRepository, LikeRepository, KafkaMessageBrokerAdapter],
};
