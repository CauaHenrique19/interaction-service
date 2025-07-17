import { StatusEnum } from '@interaction-service/domain/enums';

export interface ReviewModel {
  id: string;
  userId: string;
  mediaId: string;
  content: string;
  stars: number;
  createdAt: Date;
  status: StatusEnum;
}
