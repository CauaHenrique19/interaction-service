import { DeleteLikeUseCase } from '@interaction-service/domain/usecases';
import {
  noContent,
  serverError,
} from '@interaction-service/presentation/helpers/http-helper';
import {
  Controller,
  HttpResponse,
} from '@interaction-service/presentation/protocols';

export class DeleteLikeController implements Controller {
  constructor(private readonly deleteLike: DeleteLikeUseCase) {}

  async handle(
    request: DeleteLikeController.Parameters,
  ): Promise<HttpResponse> {
    try {
      await this.deleteLike.delete(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace DeleteLikeController {
  export type Parameters = DeleteLikeUseCase.Parameters;
}
