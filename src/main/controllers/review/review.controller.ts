import { Response } from 'express';
import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { controllerAdapter } from '@interaction-service/main/adapters/controller.adpter';
import {
  BuildCreateReviewController,
  BuildDeleteReviewController,
} from '@interaction-service/main/factories/controllers';
import { CreateReviewDTO } from '@interaction-service/main/controllers/review/dto';

@Controller('review')
export class ReviewController {
  constructor(
    private readonly buildCreateReviewController: BuildCreateReviewController,
    private readonly buildDeleteReviewController: BuildDeleteReviewController,
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

  @Delete(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async delete(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const result = await controllerAdapter(
      this.buildDeleteReviewController.build(),
      { id },
    );
    response.status(result.statusCode).json(result);
  }
}
