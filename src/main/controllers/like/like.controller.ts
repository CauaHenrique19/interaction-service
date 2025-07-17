import { Response } from 'express';
import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { controllerAdapter } from '@interaction-service/main/adapters/controller.adpter';
import {
  BuildCreateLikeController,
  BuildDeleteLikeController,
} from '@interaction-service/main/factories/controllers';
import { CreateLikeDTO } from '@interaction-service/main/controllers/like/dto';

@Controller('like')
export class LikeController {
  constructor(
    private readonly buildCreateLikeController: BuildCreateLikeController,
    private readonly buildDeleteLikeController: BuildDeleteLikeController,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(
    @Body() body: CreateLikeDTO,
    @Res() response: Response,
  ): Promise<void> {
    const result = await controllerAdapter(
      this.buildCreateLikeController.build(),
      body,
    );
    response.status(result.statusCode).json(result);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async delete(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<void> {
    const result = await controllerAdapter(
      this.buildDeleteLikeController.build(),
      { id },
    );
    response.status(result.statusCode).json(result);
  }
}
