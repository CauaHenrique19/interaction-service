import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@interaction-service/presentation/protocols';
import { DeleteCommentUseCase } from '@interaction-service/domain/usecases';
import { DELETE_COMMENT_FACTORY } from '@interaction-service/main/factories/providers';
import { DeleteCommentController } from '@interaction-service/presentation/controllers';

@Injectable()
export class BuildDeleteCommentController {
  constructor(
    @Inject(DELETE_COMMENT_FACTORY)
    private readonly deleteComment: DeleteCommentUseCase,
  ) {}

  public build(): Controller {
    const controller = new DeleteCommentController(this.deleteComment);
    return controller;
  }
}
