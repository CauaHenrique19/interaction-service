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
  BuildCreateCommentController,
  BuildDeleteCommentController,
} from '@interaction-service/main/factories/controllers';
import { CreateCommentDTO } from '@interaction-service/main/controllers/comment/dto';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly buildCreateCommentController: BuildCreateCommentController,
    private readonly buildDeleteCommentController: BuildDeleteCommentController,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(
    @Body() body: CreateCommentDTO,
    @Res() response: Response,
  ): Promise<void> {
    const result = await controllerAdapter(
      this.buildCreateCommentController.build(),
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
      this.buildDeleteCommentController.build(),
      { id },
    );
    response.status(result.statusCode).json(result);
  }
}
