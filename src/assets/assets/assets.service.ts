import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import AssetDto from './asset.dto';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}
  async all() {
    return await this.prismaService.asset.findMany();
  }
  async create(data: AssetDto) {
    return await this.prismaService.asset.create({
      data: {
        id: data.id,
        symbol: data.symbol,
      },
    });
  }
}
