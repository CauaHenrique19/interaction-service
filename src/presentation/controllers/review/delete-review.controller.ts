import { DeleteReviewUseCase } from '@interaction-service/domain/usecases';
import {
  noContent,
  serverError,
} from '@interaction-service/presentation/helpers/http-helper';
import {
  Controller,
  HttpResponse,
} from '@interaction-service/presentation/protocols';

export class DeleteReviewController implements Controller {
  constructor(private readonly deleteReview: DeleteReviewUseCase) {}

  async handle(
    request: DeleteReviewController.Parameters,
  ): Promise<HttpResponse> {
    try {
      await this.deleteReview.delete(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace DeleteReviewController {
  export type Parameters = DeleteReviewUseCase.Parameters;
}
