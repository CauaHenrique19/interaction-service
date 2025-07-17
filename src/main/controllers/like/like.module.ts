import {
  BuildCreateLikeController,
  BuildDeleteLikeController,
} from '@interaction-service/main/factories/controllers';
import { FactoryModule } from '@interaction-service/main/factories/usecases/factory.module';
import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';

@Module({
  imports: [FactoryModule],
  controllers: [LikeController],
  providers: [BuildCreateLikeController, BuildDeleteLikeController],
})
export class LikeModule {}
