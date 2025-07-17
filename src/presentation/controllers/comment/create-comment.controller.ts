import { CreateCommentUseCase } from '@interaction-service/domain/usecases';
import {
  createdSuccess,
  serverError,
} from '@interaction-service/presentation/helpers/http-helper';
import {
  Controller,
  HttpResponse,
} from '@interaction-service/presentation/protocols';

export class CreateCommentController implements Controller {
  constructor(private readonly createComment: CreateCommentUseCase) {}

  async handle(
    request: CreateCommentController.Parameters,
  ): Promise<HttpResponse> {
    try {
      const createdComment = await this.createComment.create(request);
      return createdSuccess(createdComment);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace CreateCommentController {
  export type Parameters = CreateCommentUseCase.Parameters;
}
