import { Provider } from '@nestjs/common';

import { Comment } from '@interaction-service/infra/orm/entities';
import { COMMENT_REPOSITORY } from '@interaction-service/infra/orm/typeorm/typeorm.repositories';

export const commentProvider: Provider = {
  provide: COMMENT_REPOSITORY,
  useValue: Comment,
};
