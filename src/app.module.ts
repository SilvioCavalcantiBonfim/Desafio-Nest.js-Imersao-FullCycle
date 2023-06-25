import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [PrismaModule, AssetsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
