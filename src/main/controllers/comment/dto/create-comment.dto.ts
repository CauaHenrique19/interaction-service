import { IsString } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  reviewId: string;

  @IsString()
  userId: string;

  @IsString()
  content: string;
}
