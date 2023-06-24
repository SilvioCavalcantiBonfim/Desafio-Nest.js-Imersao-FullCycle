import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [AssetsModule, PrismaModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
