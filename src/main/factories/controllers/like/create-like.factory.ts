import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@interaction-service/presentation/protocols';
import { CreateLikeUseCase } from '@interaction-service/domain/usecases';
import { CREATE_LIKE_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateLikeController } from '@interaction-service/presentation/controllers';

@Injectable()
export class BuildCreateLikeController {
  constructor(
    @Inject(CREATE_LIKE_FACTORY)
    private readonly createLike: CreateLikeUseCase,
  ) {}

  public build(): Controller {
    const controller = new CreateLikeController(this.createLike);
    return controller;
  }
}
