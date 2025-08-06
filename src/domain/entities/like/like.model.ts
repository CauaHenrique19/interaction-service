import { ReviewModel } from '@interaction-service/domain/entities';

export interface LikeModel {
  id: string;
  userId: string;
  reviewId: string;
  createdAt: Date;

  review?: ReviewModel;
}
