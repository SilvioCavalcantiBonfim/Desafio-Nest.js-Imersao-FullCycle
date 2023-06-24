import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import OrderReceiveDto from './order.dto';

@Controller('/api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Get()
  all() {
    return this.ordersService.all();
  }
  @Post()
  create(@Body() data: OrderReceiveDto) {
    return this.ordersService.create(data);
  }
}
