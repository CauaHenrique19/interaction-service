import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@interaction-service/presentation/protocols';
import { DeleteLikeUseCase } from '@interaction-service/domain/usecases';
import { DELETE_LIKE_FACTORY } from '@interaction-service/main/factories/providers';
import { DeleteLikeController } from '@interaction-service/presentation/controllers';

@Injectable()
export class BuildDeleteLikeController {
  constructor(
    @Inject(DELETE_LIKE_FACTORY)
    private readonly deleteLike: DeleteLikeUseCase,
  ) {}

  public build(): Controller {
    const controller = new DeleteLikeController(this.deleteLike);
    return controller;
  }
}
