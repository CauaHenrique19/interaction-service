import {
  BuildCreateCommentController,
  BuildDeleteCommentController,
} from '@interaction-service/main/factories/controllers';
import { FactoryModule } from '@interaction-service/main/factories/usecases/factory.module';
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';

@Module({
  imports: [FactoryModule],
  controllers: [CommentController],
  providers: [BuildCreateCommentController, BuildDeleteCommentController],
})
export class CommentModule {}
