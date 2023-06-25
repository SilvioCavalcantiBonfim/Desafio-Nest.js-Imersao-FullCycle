import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import OrderReceiveDto from './order.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  async all() {
    return await this.prismaService.order.findMany();
  }
  async create(data: OrderReceiveDto) {
    return await this.prismaService.order.create({
      data: {
        asset_id: data.asset_id,
        price: data.price,
        status: OrderStatus.PENDING,
      },
    });
  }
}
