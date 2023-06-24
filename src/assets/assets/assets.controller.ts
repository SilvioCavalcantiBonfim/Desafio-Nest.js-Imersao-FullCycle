import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetsService } from './assets.service';
import AssetDto from './asset.dto';

@Controller('api/assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}
  @Get()
  all() {
    return this.assetsService.all();
  }
  @Post()
  create(@Body() data: AssetDto) {
    return this.assetsService.create(data);
  }
}
