import { Module } from '@nestjs/common';

import {
  CommentRepository,
  LikeRepository,
  ReviewRepository,
} from '@interaction-service/infra/orm/repositories';
import {
  likeProvider,
  reviewProvider,
  commentProvider,
} from '@interaction-service/infra/orm/providers';
import {
  createReviewFactory,
  createLikeFactory,
  deleteLikeFactory,
  createCommentFactory,
  deleteCommentFactory,
} from '@interaction-service/main/factories/usecases';

@Module({
  providers: [
    ReviewRepository,
    LikeRepository,
    CommentRepository,

    reviewProvider,
    likeProvider,
    commentProvider,

    createReviewFactory,
    createLikeFactory,
    deleteLikeFactory,
    createCommentFactory,
    deleteCommentFactory,
  ],
  exports: [
    createReviewFactory,
    createLikeFactory,
    deleteLikeFactory,
    createCommentFactory,
    deleteCommentFactory,
  ],
})
export class FactoryModule {}
