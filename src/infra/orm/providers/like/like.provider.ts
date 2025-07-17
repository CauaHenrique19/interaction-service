import { Provider } from '@nestjs/common';

import { Like } from '@interaction-service/infra/orm/entities';
import { LIKE_REPOSITORY } from '@interaction-service/infra/orm/typeorm/typeorm.repositories';

export const likeProvider: Provider = {
  provide: LIKE_REPOSITORY,
  useValue: Like,
};
