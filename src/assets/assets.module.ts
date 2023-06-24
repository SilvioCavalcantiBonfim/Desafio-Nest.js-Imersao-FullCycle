import { Module } from '@nestjs/common';
import { AssetsService } from './assets/assets.service';
import { AssetsController } from './assets/assets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AssetsService],
  controllers: [AssetsController],
  imports: [PrismaModule],
})
export class AssetsModule {}
