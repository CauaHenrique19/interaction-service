import { Provider } from '@nestjs/common';

import { CREATE_LIKE_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateLikeUseCase } from '@interaction-service/domain/usecases';
import { CreateLike } from '@interaction-service/data/usecases';
import { LikeRepository } from '@interaction-service/infra/orm/repositories';

export const createLikeFactory: Provider = {
  provide: CREATE_LIKE_FACTORY,
  useFactory: (likeRepository: LikeRepository): CreateLikeUseCase => {
    return new CreateLike(likeRepository);
  },
  inject: [LikeRepository],
};
