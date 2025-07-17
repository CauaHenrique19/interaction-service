export interface CommentModel {
  id: string;
  userId: string;
  reviewId: string;
  content: string;
  createdAt: Date;
}
