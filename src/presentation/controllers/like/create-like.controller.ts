import { CreateLikeUseCase } from '@interaction-service/domain/usecases';
import {
  createdSuccess,
  serverError,
} from '@interaction-service/presentation/helpers/http-helper';
import {
  Controller,
  HttpResponse,
} from '@interaction-service/presentation/protocols';

export class CreateLikeController implements Controller {
  constructor(private readonly createLike: CreateLikeUseCase) {}

  async handle(
    request: CreateLikeController.Parameters,
  ): Promise<HttpResponse> {
    try {
      const createdLike = await this.createLike.create(request);
      return createdSuccess(createdLike);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace CreateLikeController {
  export type Parameters = CreateLikeUseCase.Parameters;
}
