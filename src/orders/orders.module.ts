import { Module } from '@nestjs/common';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [PrismaModule],
})
export class OrdersModule {}
