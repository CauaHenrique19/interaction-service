import { Provider } from '@nestjs/common';

import { DELETE_LIKE_FACTORY } from '@interaction-service/main/factories/providers';
import { DeleteLikeUseCase } from '@interaction-service/domain/usecases';
import { DeleteLike } from '@interaction-service/data/usecases';
import { LikeRepository } from '@interaction-service/infra/orm/repositories';
import { KafkaMessageBrokerAdapter } from '@interaction-service/infra/kafka/adapter';

export const deleteLikeFactory: Provider = {
  provide: DELETE_LIKE_FACTORY,
  useFactory: (
    likeRepository: LikeRepository,
    kafkaMessageBrokerAdapter: KafkaMessageBrokerAdapter,
  ): DeleteLikeUseCase => {
    return new DeleteLike(
      likeRepository,
      likeRepository,
      kafkaMessageBrokerAdapter,
    );
  },
  inject: [LikeRepository, KafkaMessageBrokerAdapter],
};
