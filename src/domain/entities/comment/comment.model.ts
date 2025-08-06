import { ReviewModel } from '@interaction-service/domain/entities';

export interface CommentModel {
  id: string;
  userId: string;
  reviewId: string;
  content: string;
  createdAt: Date;

  review?: ReviewModel;
}
