import {
  Controller,
  HttpResponse,
} from '@interaction-service/presentation/protocols';

export const controllerAdapter = async (
  controller: Controller,
  request?: any,
): Promise<HttpResponse> => {
  return controller.handle(request);
};
