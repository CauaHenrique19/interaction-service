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
  deleteReviewFactory,
} from '@interaction-service/main/factories/usecases';
import { KafkaMessageBrokerAdapter } from '@interaction-service/infra/kafka/adapter';

@Module({
  providers: [
    ReviewRepository,
    LikeRepository,
    CommentRepository,

    KafkaMessageBrokerAdapter,

    reviewProvider,
    likeProvider,
    commentProvider,

    createReviewFactory,
    deleteReviewFactory,
    createLikeFactory,
    deleteLikeFactory,
    createCommentFactory,
    deleteCommentFactory,
  ],
  exports: [
    KafkaMessageBrokerAdapter,

    createReviewFactory,
    deleteReviewFactory,
    createLikeFactory,
    deleteLikeFactory,
    createCommentFactory,
    deleteCommentFactory,
  ],
})
export class FactoryModule {}
