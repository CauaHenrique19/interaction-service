import { Provider } from '@nestjs/common';

import { Review } from '@interaction-service/infra/orm/entities';
import { REVIEW_REPOSITORY } from '@interaction-service/infra/orm/typeorm/typeorm.repositories';

export const reviewProvider: Provider = {
  provide: REVIEW_REPOSITORY,
  useValue: Review,
};
