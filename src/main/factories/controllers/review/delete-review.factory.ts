import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@interaction-service/presentation/protocols';
import { DeleteReviewUseCase } from '@interaction-service/domain/usecases';
import { DELETE_REVIEW_FACTORY } from '@interaction-service/main/factories/providers';
import { DeleteReviewController } from '@interaction-service/presentation/controllers';

@Injectable()
export class BuildDeleteReviewController {
  constructor(
    @Inject(DELETE_REVIEW_FACTORY)
    private readonly deleteReview: DeleteReviewUseCase,
  ) {}

  public build(): Controller {
    const controller = new DeleteReviewController(this.deleteReview);
    return controller;
  }
}
