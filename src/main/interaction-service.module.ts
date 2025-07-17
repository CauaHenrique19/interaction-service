import { Module } from '@nestjs/common';

import { TypeormModule } from '@interaction-service/infra/orm/typeorm/typeorm.module';
import { ReviewModule } from '@interaction-service/main/controllers/review/review.module';
import { LikeModule } from '@interaction-service/main/controllers/like/like.module';
import { CommentModule } from '@interaction-service/main/controllers/comment/comment.module';

@Module({
  imports: [TypeormModule, ReviewModule, LikeModule, CommentModule],
})
export class InteractionServiceModule {}
