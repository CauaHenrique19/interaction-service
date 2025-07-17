import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { CommentModel } from '@interaction-service/domain/entities';
import { Review } from '@interaction-service/infra/orm/entities';

@Entity({ name: 'tb_comment' })
export class Comment implements CommentModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'review_id' })
  reviewId: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Review)
  @JoinColumn({ name: 'review_id' })
  review: Review;
}
