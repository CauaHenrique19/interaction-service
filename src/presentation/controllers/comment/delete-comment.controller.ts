import { DeleteCommentUseCase } from '@interaction-service/domain/usecases';
import {
  noContent,
  serverError,
} from '@interaction-service/presentation/helpers/http-helper';
import {
  Controller,
  HttpResponse,
} from '@interaction-service/presentation/protocols';

export class DeleteCommentController implements Controller {
  constructor(private readonly deleteComment: DeleteCommentUseCase) {}

  async handle(
    request: DeleteCommentController.Parameters,
  ): Promise<HttpResponse> {
    try {
      await this.deleteComment.delete(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace DeleteCommentController {
  export type Parameters = DeleteCommentUseCase.Parameters;
}
