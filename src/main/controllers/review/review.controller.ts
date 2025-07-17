import { Response } from 'express';
import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { controllerAdapter } from '@interaction-service/main/adapters/controller.adpter';
import { BuildCreateReviewController } from '@interaction-service/main/factories/controllers';
import { CreateReviewDTO } from '@interaction-service/main/controllers/review/dto';

@Controller('review')
export class ReviewController {
  constructor(
    private readonly buildCreateReviewController: BuildCreateReviewController,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(
    @Body() body: CreateReviewDTO,
    @Res() response: Response,
  ): Promise<void> {
    const result = await controllerAdapter(
      this.buildCreateReviewController.build(),
      body,
    );
    response.status(result.statusCode).json(result);
  }
}
