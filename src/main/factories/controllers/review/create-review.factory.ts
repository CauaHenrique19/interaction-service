import { Inject, Injectable } from '@nestjs/common';

import { Controller } from '@interaction-service/presentation/protocols';
import { CreateReviewUseCase } from '@interaction-service/domain/usecases';
import { CREATE_REVIEW_FACTORY } from '@interaction-service/main/factories/providers';
import { CreateReviewController } from '@interaction-service/presentation/controllers';

@Injectable()
export class BuildCreateReviewController {
  constructor(
    @Inject(CREATE_REVIEW_FACTORY)
    private readonly createReview: CreateReviewUseCase,
  ) {}

  public build(): Controller {
    const controller = new CreateReviewController(this.createReview);
    return controller;
  }
}
