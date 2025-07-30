import { Module } from '@nestjs/common';

import { BuildCreateReviewController } from '@interaction-service/main/factories/controllers';
import { FactoryModule } from '@interaction-service/main/factories/usecases/factory.module';
import { ReviewController } from './review.controller';

@Module({
  imports: [FactoryModule],
  controllers: [ReviewController],
  providers: [BuildCreateReviewController],
})
export class ReviewModule {}
