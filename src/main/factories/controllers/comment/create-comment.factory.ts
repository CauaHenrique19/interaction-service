import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@interaction-service/presentation/protocols';
import { CreateCommentUseCase } from '@interaction-service/domain/usecases';
import { CREATE_COMMENT_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateCommentController } from '@interaction-service/presentation/controllers';

@Injectable()
export class BuildCreateCommentController {
  constructor(
    @Inject(CREATE_COMMENT_FACTORY)
    private readonly createComment: CreateCommentUseCase,
  ) {}

  public build(): Controller {
    const controller = new CreateCommentController(this.createComment);
    return controller;
  }
}
