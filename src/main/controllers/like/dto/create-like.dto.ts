import { IsString } from 'class-validator';

export class CreateLikeDTO {
  @IsString()
  reviewId: string;

  @IsString()
  userId: string;
}
