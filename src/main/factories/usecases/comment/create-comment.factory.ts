import { Provider } from '@nestjs/common';

import { CREATE_COMMENT_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateCommentUseCase } from '@interaction-service/domain/usecases';
import { CreateComment } from '@interaction-service/data/usecases';
import { CommentRepository } from '@interaction-service/infra/orm/repositories';

export const createCommentFactory: Provider = {
  provide: CREATE_COMMENT_FACTORY,
  useFactory: (commentRepository: CommentRepository): CreateCommentUseCase => {
    return new CreateComment(commentRepository);
  },
  inject: [CommentRepository],
};
