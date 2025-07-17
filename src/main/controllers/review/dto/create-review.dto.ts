import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDTO {
  @IsString()
  userId: string;

  @IsString()
  mediaId: string;

  @IsString()
  content: string;

  @IsNumber()
  stars: number;
}
