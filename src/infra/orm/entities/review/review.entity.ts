import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ReviewModel } from '@interaction-service/domain/entities';
import { StatusEnum } from '@interaction-service/domain/enums';

@Entity({ name: 'tb_review' })
export class Review implements ReviewModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column({ name: 'media_id' })
  mediaId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column()
  stars: number;

  @Column({
    type: 'enum',
    enum: StatusEnum,
  })
  status: StatusEnum;

  @Column({ name: 'created_at' })
  createdAt: Date;
}
