import { Provider } from '@nestjs/common';

import { DELETE_COMMENT_FACTORY } from '@interaction-service/main/factories/providers';
import { DeleteCommentUseCase } from '@interaction-service/domain/usecases';
import { DeleteComment } from '@interaction-service/data/usecases';
import { CommentRepository } from '@interaction-service/infra/orm/repositories';

export const deleteCommentFactory: Provider = {
  provide: DELETE_COMMENT_FACTORY,
  useFactory: (commentRepository: CommentRepository): DeleteCommentUseCase => {
    return new DeleteComment(commentRepository);
  },
  inject: [CommentRepository],
};
