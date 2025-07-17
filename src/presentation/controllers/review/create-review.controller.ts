import { CreateReviewUseCase } from '@interaction-service/domain/usecases';
import {
  createdSuccess,
  serverError,
} from '@interaction-service/presentation/helpers/http-helper';
import {
  Controller,
  HttpResponse,
} from '@interaction-service/presentation/protocols';

export class CreateReviewController implements Controller {
  constructor(private readonly createReview: CreateReviewUseCase) {}

  async handle(
    request: CreateReviewController.Parameters,
  ): Promise<HttpResponse> {
    try {
      const createdReview = await this.createReview.create(request);
      return createdSuccess(createdReview);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace CreateReviewController {
  export type Parameters = CreateReviewUseCase.Parameters;
}
